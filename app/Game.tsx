"use client";

import { useEffect, useRef, useState } from "react";
import { trackStudioEvent } from "./analytics";
import { getDailyGame } from "./data/dailyGame";
import { DEFINITIONS } from "./data/definitions";
import {
  DndContext,
  useDraggable,
  useDroppable,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

function distributeAndShuffle(groups: any[]) {
  const rows: string[][] = [];

  for (let i = 0; i < 4; i++) {
    const row: string[] = [];
    groups.forEach((group: any) => row.push(group.words[i]));

    for (let j = row.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [row[j], row[k]] = [row[k], row[j]];
    }

    rows.push(row);
  }

  return rows.flat();
}

function shuffleArray<T>(items: T[]) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[k]] = [shuffled[k], shuffled[i]];
  }

  return shuffled;
}

function prepareAnswerOptions(group: any, groupIndex: number, selectedGame: any) {
  const options = Array.isArray(group.options) ? group.options : [];
  const distractors = options.filter((option: string) => option !== group.correct);
  const shuffledDistractors = shuffleArray(distractors);
  const preparedOptions = shuffledDistractors.slice(0, 3);
  const targetIndex = (selectedGame.week + selectedGame.day + groupIndex) % 4;

  preparedOptions.splice(targetIndex, 0, group.correct);

  return {
    ...group,
    options: preparedOptions,
  };
}

function formatTime(ms: number) {
  const seconds = Math.floor(ms / 1000);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

function todayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function legacyUtcTodayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function todayResultKeys(date = new Date()) {
  return new Set([todayKey(date), legacyUtcTodayKey(date)]);
}

function getSkillLabel(skill: string) {
  const labels: Record<string, string> = {
    abstraction: "Abstraction",
    symbolic: "Symbolic Thinking",
    linguistic: "Language Structure",
  };

  return labels[skill] || skill;
}

function calculateStreak(results: any[]) {
  const dates = new Set(results.map((r) => r.date));
  let streak = 0;
  const cursor = new Date();

  while (true) {
    const key = cursor.toISOString().slice(0, 10);
    if (!dates.has(key)) break;

    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function bestAndWeakestSkill(results: any[]) {
  const totals: Record<string, number> = {
    abstraction: 0,
    symbolic: 0,
    linguistic: 0,
  };

  results.forEach((r) => {
    Object.entries(r.skillMistakes || {}).forEach(([skill, count]: any) => {
      totals[skill] += count;
    });
  });

  const sorted = Object.entries(totals).sort((a, b) => a[1] - b[1]);

  return {
    best: sorted[0]?.[0] || "abstraction",
    weakest: sorted[sorted.length - 1]?.[0] || "linguistic",
  };
}

const SKILL_ORDER = ["abstraction", "symbolic", "linguistic"];

function getTodaySkillStats(skillMistakes: Record<string, number> = {}) {
  const sorted = SKILL_ORDER.map((skill) => ({
    skill,
    mistakes: skillMistakes[skill] || 0,
  })).sort(
    (a, b) =>
      a.mistakes - b.mistakes ||
      SKILL_ORDER.indexOf(a.skill) - SKILL_ORDER.indexOf(b.skill)
  );

  return {
    best: sorted[0]?.skill || "abstraction",
    weakest: sorted[sorted.length - 1]?.skill || "linguistic",
  };
}

function getThinkingStyle(result: any, bestSkill: string) {
  const lensWords = result.lensWords || [];

  if (lensWords.length >= 2) return "Curious Builder";
  if (result.mistakes === 0 && result.timeMs <= 180000) return "Fast Connector";
  if (result.mistakes === 0) return "Clean Architect";
  if (bestSkill === "symbolic") return "Symbol Reader";
  if (bestSkill === "linguistic") return "Word Mechanic";
  if (result.mistakes <= 2) return "Pattern Finder";
  return "Persistent Architect";
}

function getThinkingReflection(result: any, bestSkill: string) {
  const lensWords = result.lensWords || [];

  if (lensWords.length >= 2) {
    return "You used curiosity as part of the solve, then brought the pattern back together.";
  }

  if (result.mistakes === 0) {
    return "You moved through today's structure with clean precision.";
  }

  if (bestSkill === "symbolic") {
    return "You were strongest at reading images, symbols, and hidden associations.";
  }

  if (bestSkill === "linguistic") {
    return "You were strongest at noticing how language itself is built.";
  }

  return "You were strongest at finding the shared structure underneath the surface.";
}

function getWeeklyTimeMessage(weekResults: any[]) {
  if (weekResults.length < 2) {
    return "Your weekly rhythm will build here as you complete more days.";
  }

  const first = weekResults[0];
  const latest = weekResults[weekResults.length - 1];
  const difference = latest.timeMs - first.timeMs;

  if (difference > 60000) {
    return "You are giving the harder puzzles more room as the week climbs.";
  }

  if (difference < -30000) {
    return "You are moving through the week faster than where you started.";
  }

  return "Your pace is holding steady as the week changes.";
}

function getCardWordSizeClass(word: string) {
  const compactLength = word.replace(/\s+/g, "").length;

  if (compactLength >= 14) return "text-[8px] sm:text-[10.5px]";
  if (compactLength >= 12) return "text-[8.5px] sm:text-[11px]";
  if (compactLength >= 10) return "text-[9.5px] sm:text-xs";

  return "text-[11px] sm:text-sm";
}

function DraggableCard({
  id,
  disabled,
  selected,
  hasDefinition,
  onTap,
  mobileTapMode,
}: {
  id: string;
  disabled?: boolean;
  selected?: boolean;
  hasDefinition?: boolean;
  onTap?: () => void;
  mobileTapMode?: boolean;
}) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
    disabled: disabled || mobileTapMode,
  });

  return (
    <button
      ref={setNodeRef}
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled) onTap?.();
      }}
      title={hasDefinition ? `${id} has Word Lens` : id}
      {...(!mobileTapMode ? listeners : {})}
      {...(!mobileTapMode ? attributes : {})}
      className={`relative min-w-0 w-full px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-full border transition
        text-center
        ${
          disabled
            ? "bg-emerald-500 text-neutral-950 border-emerald-600"
            : selected
            ? "bg-neutral-950 text-white border-neutral-950 ring-2 ring-amber-400 scale-105"
            : "bg-amber-100 text-neutral-950 border-amber-300 shadow active:scale-95"
        } ${mobileTapMode ? "cursor-pointer" : "cursor-grab"}`}
    >
      <span
        className={`block w-full whitespace-nowrap text-center font-bold leading-none tracking-normal ${getCardWordSizeClass(
          id
        )}`}
        style={{
          fontFamily:
            '"Arial Narrow", "Aptos Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
          fontStretch: "condensed",
        }}
      >
        {id}
      </span>

      {hasDefinition && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-blue-600 ring-2 ring-white shadow-sm"
        />
      )}
    </button>
  );
}

function DroppableArea({
  id,
  children,
  disabled,
  onTap,
}: {
  id: string;
  children: React.ReactNode;
  disabled?: boolean;
  onTap?: () => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id, disabled });

  return (
    <div
      ref={setNodeRef}
      onClick={onTap}
      className={`p-4 sm:p-6 bg-white text-neutral-900 rounded-xl sm:rounded-2xl border border-neutral-200 shadow-sm space-y-3 sm:space-y-4 ${
        isOver && !disabled ? "ring-2 ring-emerald-500" : ""
      } ${onTap && !disabled ? "cursor-pointer" : ""}`}
    >
      {children}
    </div>
  );
}

function ResultsDashboard({
  selectedGame,
  result,
  history,
}: {
  selectedGame: any;
  result: any;
  history: any[];
}) {
  const currentHistory = [
    ...history.filter((r) => r.date !== result.date),
    result,
  ];

  const avgMistakes =
    currentHistory.length > 0
      ? (
          currentHistory.reduce((sum, r) => sum + r.mistakes, 0) /
          currentHistory.length
        ).toFixed(1)
      : "0";

  const fastest =
    currentHistory.length > 0
      ? Math.min(...currentHistory.map((r) => r.timeMs))
      : null;

  const streak = calculateStreak(currentHistory);
  const skillStats = bestAndWeakestSkill(currentHistory);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md bg-white border border-neutral-200 p-6 rounded-3xl shadow space-y-6">
        <div className="text-center space-y-1">
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            Daily puzzle complete
          </p>

          <h1 className="text-3xl font-semibold">Complete!</h1>

          <p className="text-sm text-neutral-600">
            Week {selectedGame.week}, Day {selectedGame.day}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-amber-100 border border-amber-300 rounded-2xl p-4">
            <p className="text-xs text-neutral-600">Today’s time</p>
            <p className="text-xl font-semibold">{formatTime(result.timeMs)}</p>
          </div>

          <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-4">
            <p className="text-xs text-neutral-600">Mistakes</p>
            <p className="text-xl font-semibold">{result.mistakes}</p>
          </div>

          <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-4">
            <p className="text-xs text-neutral-600">Current streak</p>
            <p className="text-xl font-semibold">{streak} days</p>
          </div>

          <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-4">
            <p className="text-xs text-neutral-600">Performance</p>
            <p className="text-xl font-semibold">
              {result.mistakes === 0
                ? "Excellent"
                : result.mistakes <= 2
                ? "Strong"
                : result.mistakes <= 4
                ? "Good"
                : "Keep practicing"}
            </p>
          </div>
        </div>

        <div className="bg-neutral-950 text-white rounded-2xl p-4 space-y-2">
          <p className="text-sm font-semibold">Thinking profile</p>

          <p className="text-sm">
            Strongest area:{" "}
            <span className="font-semibold">
              {getSkillLabel(skillStats.best)}
            </span>
          </p>

          <p className="text-sm">
            Area to strengthen:{" "}
            <span className="font-semibold">
              {getSkillLabel(skillStats.weakest)}
            </span>
          </p>
        </div>

        <div className="text-sm text-neutral-700 space-y-1">
          <p>Average mistakes: {avgMistakes}</p>
          <p>Fastest time: {fastest ? formatTime(fastest) : "—"}</p>
          <p>Total completed: {currentHistory.length}</p>
        </div>

        <p className="text-center text-xs text-neutral-500">
          Come back tomorrow for the next puzzle.
        </p>
      </div>
    </div>
  );
}

function RichResultsDashboard({
  selectedGame,
  result,
  history,
}: {
  selectedGame: any;
  result: any;
  history: any[];
}) {
  const currentHistory = [
    ...history.filter((r) => r.date !== result.date),
    result,
  ];

  const avgMistakes =
    currentHistory.length > 0
      ? (
          currentHistory.reduce((sum, r) => sum + r.mistakes, 0) /
          currentHistory.length
        ).toFixed(1)
      : "0";

  const fastest =
    currentHistory.length > 0
      ? Math.min(...currentHistory.map((r) => r.timeMs))
      : null;

  const streak = calculateStreak(currentHistory);
  const skillStats = bestAndWeakestSkill(currentHistory);
  const todaySkillStats = getTodaySkillStats(result.skillMistakes);
  const thinkingStyle = getThinkingStyle(result, todaySkillStats.best);
  const thinkingReflection = getThinkingReflection(
    result,
    todaySkillStats.best
  );
  const lensWords = Array.isArray(result.lensWords)
    ? Array.from(new Set<string>(result.lensWords))
    : [];
  const weekResults = currentHistory
    .filter(
      (r) =>
        r.week === result.week &&
        typeof r.day === "number" &&
        typeof r.timeMs === "number"
    )
    .sort((a, b) => a.day - b.day);
  const resultsByDay = new Map(weekResults.map((r) => [r.day, r]));
  const maxWeekTime = Math.max(1, ...weekResults.map((r) => r.timeMs || 0));
  const weekSlots = Array.from({ length: 7 }, (_, i) => {
    const day = i + 1;
    return {
      day,
      result: resultsByDay.get(day),
    };
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4 py-8">
      <div className="w-full max-w-xl bg-white border border-neutral-200 p-6 rounded-3xl shadow space-y-6">
        <div className="text-center space-y-1">
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            Daily puzzle complete
          </p>

          <h1 className="text-3xl font-semibold">You built it.</h1>

          <p className="text-sm text-neutral-600">
            Week {selectedGame.week}, Day {selectedGame.day}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-amber-100 border border-amber-300 rounded-2xl p-4">
            <p className="text-xs text-neutral-600">Today's time</p>
            <p className="text-xl font-semibold">{formatTime(result.timeMs)}</p>
          </div>

          <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-4">
            <p className="text-xs text-neutral-600">Mistakes</p>
            <p className="text-xl font-semibold">{result.mistakes}</p>
          </div>

          <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-4">
            <p className="text-xs text-neutral-600">Current streak</p>
            <p className="text-xl font-semibold">{streak} days</p>
          </div>

          <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-4">
            <p className="text-xs text-neutral-600">Thinking style</p>
            <p className="text-xl font-semibold">{thinkingStyle}</p>
          </div>
        </div>

        <div className="bg-neutral-950 text-white rounded-2xl p-4 space-y-2">
          <p className="text-xs uppercase tracking-wide text-white/60">
            Today's thinking style
          </p>

          <p className="text-2xl font-semibold">{thinkingStyle}</p>

          <p className="text-sm text-white/80">{thinkingReflection}</p>

          <p className="text-sm">
            Strongest skill today:{" "}
            <span className="font-semibold">
              {getSkillLabel(todaySkillStats.best)}
            </span>
          </p>
        </div>

        <div className="border border-neutral-200 rounded-2xl p-4 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Time spent this week</p>
              <p className="text-xs text-neutral-500">
                {getWeeklyTimeMessage(weekResults)}
              </p>
            </div>

            <p className="text-xs text-neutral-500 whitespace-nowrap">
              Week {selectedGame.week}
            </p>
          </div>

          <div className="grid grid-cols-7 gap-2 items-end h-28">
            {weekSlots.map((slot) => {
              const height = slot.result
                ? Math.max(
                    18,
                    Math.round((slot.result.timeMs / maxWeekTime) * 92)
                  )
                : 12;

              return (
                <div
                  key={slot.day}
                  className="h-full flex flex-col items-center justify-end gap-1"
                >
                  <div
                    className={`w-full rounded-t-lg ${
                      slot.result ? "bg-blue-600" : "bg-neutral-200"
                    }`}
                    style={{ height: `${height}px` }}
                    aria-label={
                      slot.result
                        ? `Day ${slot.day}: ${formatTime(slot.result.timeMs)}`
                        : `Day ${slot.day}: not completed`
                    }
                  />

                  <p className="text-[10px] text-neutral-500">D{slot.day}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border border-neutral-200 rounded-2xl p-4 space-y-3">
          <p className="text-sm font-semibold">What you built today</p>

          <div className="space-y-3">
            {selectedGame.groups.map((group: any, index: number) => (
              <div key={`${group.correct}-${index}`} className="space-y-1">
                <p className="text-sm font-semibold text-neutral-900">
                  {group.correct}
                </p>

                <p className="text-xs text-neutral-500">
                  {group.words.join(" / ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-neutral-200 rounded-2xl p-4 space-y-2">
          <p className="text-sm font-semibold">Word Lens finds</p>

          {lensWords.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {lensWords.map((word) => (
                <span
                  key={word}
                  className="bg-amber-100 border border-amber-300 text-amber-950 rounded-full px-3 py-1 text-xs font-medium"
                >
                  {word}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-neutral-600">
              No Word Lens words explored today.
            </p>
          )}
        </div>

        <div className="text-sm text-neutral-700 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <p>Average mistakes: {avgMistakes}</p>
          <p>Fastest time: {fastest ? formatTime(fastest) : "-"}</p>
          <p>Total completed: {currentHistory.length}</p>
        </div>

        <div className="text-xs text-neutral-500 space-y-1">
          <p>Long-term strongest area: {getSkillLabel(skillStats.best)}</p>
          <p>
            Area to strengthen over time: {getSkillLabel(skillStats.weakest)}
          </p>
        </div>

        <p className="text-center text-xs text-neutral-500">
          Come back tomorrow for the next puzzle.
        </p>
      </div>
    </div>
  );
}

function PlaytestCompletion({
  selectedGame,
  timeMs,
  mistakes,
}: {
  selectedGame: any;
  timeMs: number;
  mistakes: number;
}) {
  useEffect(() => {
    const returnTimer = window.setTimeout(() => {
      window.location.href = "/editor";
    }, 2500);

    return () => window.clearTimeout(returnTimer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md bg-white border border-neutral-200 p-6 rounded-3xl shadow space-y-6">
        <div className="text-center space-y-1">
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            Playtest complete
          </p>

          <h1 className="text-3xl font-semibold">Complete!</h1>

          {selectedGame.week && selectedGame.day ? (
            <p className="text-sm text-neutral-600">
              Week {selectedGame.week}, Day {selectedGame.day}
            </p>
          ) : (
            <p className="text-sm text-neutral-600">Draft puzzle</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-amber-100 border border-amber-300 rounded-2xl p-4">
            <p className="text-xs text-neutral-600">Time</p>
            <p className="text-xl font-semibold">{formatTime(timeMs)}</p>
          </div>

          <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-4">
            <p className="text-xs text-neutral-600">Mistakes</p>
            <p className="text-xl font-semibold">{mistakes}</p>
          </div>
        </div>

        <div className="space-y-3 text-center">
          <p className="text-xs text-neutral-500">
            This playtest run was not saved. Returning to the editor...
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/editor";
            }}
            className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
          >
            Return to Editor
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Game({ overrideGame }: { overrideGame?: any }) {
  const isEditorPreview = Boolean(overrideGame);
  const [mobileTapMode, setMobileTapMode] = useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  useEffect(() => {
    const check = () =>
      setMobileTapMode(
        window.matchMedia("(pointer: coarse)").matches ||
          window.matchMedia("(max-width: 767px)").matches
      );

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  const [{ selectedGame, isPlaytestMode }] = useState(() => {
    if (overrideGame) {
      return { selectedGame: overrideGame, isPlaytestMode: false };
    }

    const playtest = localStorage.getItem("wordArchitectPlaytest");

    if (playtest) {
      localStorage.removeItem("wordArchitectPlaytest");
      return {
        selectedGame: JSON.parse(playtest),
        isPlaytestMode: true,
      };
    }

    return { selectedGame: getDailyGame(), isPlaytestMode: false };
  });

  const selectedGroups = selectedGame.groups;

  const [availableCards, setAvailableCards] = useState<string[]>(() =>
    distributeAndShuffle(selectedGroups)
  );

  const [showTutorial, setShowTutorial] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [lensWord, setLensWord] = useState<string | null>(null);
  const [exploredLensWords, setExploredLensWords] = useState<string[]>([]);
  const [startTime] = useState<number>(Date.now());
  const [completedResult, setCompletedResult] = useState<any | null>(null);
  const [mistakes, setMistakes] = useState<number>(0);
  const [history, setHistory] = useState<any[]>([]);
  const [alreadyCompletedResult, setAlreadyCompletedResult] =
    useState<any | null>(null);
  const [resultsReady, setResultsReady] = useState(false);
  const completionTimerRef = useRef<number | null>(null);
  const preparedResultRef = useRef<any | null>(null);
  const dashboardShownRef = useRef(false);
  const startTrackedRef = useRef(false);

  const [skillMistakes, setSkillMistakes] = useState<Record<string, number>>({
    abstraction: 0,
    symbolic: 0,
    linguistic: 0,
  });

  const [stacks, setStacks] = useState<any[]>(
    selectedGroups.map((group: any, i: number) => ({
      id: `group-${i}`,
      cards: [],
      locked: false,
      data: prepareAnswerOptions(group, i, selectedGame),
      selected: "",
      showAnswer: false,
      wrongSelection: "",
      answerFeedback: "",
      collapsed: false,
      fading: false,
      feedback: "",
    }))
  );

  const buildResult = (finishedAt: number) => ({
    date: todayKey(),
    gameId: selectedGame.id,
    week: selectedGame.week,
    day: selectedGame.day,
    difficulty: selectedGame.difficulty,
    timeMs: finishedAt - startTime,
    mistakes,
    skillMistakes,
    lensWords: exploredLensWords,
  });

  const readSavedResults = () => {
    try {
      const saved = localStorage.getItem("wordArchitectResults");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const prepareCompletedResult = () => {
    if (preparedResultRef.current) return preparedResultRef.current;

    const result = buildResult(Date.now());
    preparedResultRef.current = result;
    setResultsReady(true);
    trackStudioEvent(
      isEditorPreview
        ? "editor_preview_completed"
        : isPlaytestMode
        ? "playtest_completed"
        : "puzzle_completed",
      {
        game_id: result.gameId,
        week: result.week,
        day: result.day,
        difficulty: result.difficulty,
        mistakes: result.mistakes,
        time_ms: result.timeMs,
        lens_count: result.lensWords.length,
      }
    );

    if (isEditorPreview || isPlaytestMode) return result;

    const resultKeys = todayResultKeys();
    const savedHistory = readSavedResults();
    const withoutToday = savedHistory.filter(
      (r) => !(resultKeys.has(r.date) && r.gameId === result.gameId)
    );
    const updated = [...withoutToday, result];

    try {
      localStorage.setItem("wordArchitectResults", JSON.stringify(updated));
    } catch {
      // The dashboard should still appear even if local storage is unavailable.
    }

    setHistory(updated);

    return result;
  };

  const completePuzzle = () => {
    if (dashboardShownRef.current) {
      if (preparedResultRef.current) {
        setCompletedResult(preparedResultRef.current);
      }
      return;
    }

    dashboardShownRef.current = true;

    if (completionTimerRef.current) {
      window.clearTimeout(completionTimerRef.current);
      completionTimerRef.current = null;
    }

    setCompletedResult(prepareCompletedResult());
  };

  const scheduleCompletion = () => {
    if (dashboardShownRef.current || completionTimerRef.current) return;

    completionTimerRef.current = window.setTimeout(() => {
      completePuzzle();
    }, 7000);
  };

  useEffect(() => {
    const parsed = readSavedResults();

    setHistory(parsed);
    if (!startTrackedRef.current) {
      startTrackedRef.current = true;
      trackStudioEvent(
        isEditorPreview
          ? "editor_preview_started"
          : isPlaytestMode
          ? "playtest_started"
          : "game_started",
        {
          game_id: selectedGame.id,
          week: selectedGame.week,
          day: selectedGame.day,
          difficulty: selectedGame.difficulty,
        }
      );
    }

    if (!isEditorPreview && !isPlaytestMode) {
      const resultKeys = todayResultKeys();
      const todayResult = parsed.find(
        (r: any) => resultKeys.has(r.date) && r.gameId === selectedGame.id
      );

      if (todayResult) {
        setAlreadyCompletedResult(todayResult);
        trackStudioEvent("already_completed_viewed", {
          game_id: selectedGame.id,
          week: selectedGame.week,
          day: selectedGame.day,
        });
      }
    }

    if (!localStorage.getItem("wordArchitectTutorialSeen")) {
      setShowTutorial(true);
    }
  }, [isEditorPreview, isPlaytestMode, selectedGame.id]);

  useEffect(() => {
    if (completedResult || stacks.length === 0 || completionTimerRef.current)
      return;

    const puzzleAnswered = stacks.every(
      (stack: any) => stack.locked && stack.showAnswer
    );

    if (puzzleAnswered) {
      prepareCompletedResult();
      scheduleCompletion();
    }
  }, [completedResult, stacks]);

  useEffect(() => {
    return () => {
      if (completionTimerRef.current) {
        window.clearTimeout(completionTimerRef.current);
      }
    };
  }, []);

  const closeTutorial = () => {
    localStorage.setItem("wordArchitectTutorialSeen", "true");
    setShowTutorial(false);
  };

  const moveCardTo = (card: string, target: string) => {
    const targetStack = stacks.find((s: any) => s.id === target);
    if (targetStack?.locked) return;

    let newStacks = stacks.map((s: any) => ({
      ...s,
      cards: s.cards.filter((c: string) => c !== card),
    }));

    let newAvailable = availableCards.filter((c: string) => c !== card);

    if (target === "available") {
      newAvailable.push(card);
    } else {
      newStacks = newStacks.map((s: any) => {
        if (s.id === target) {
          if (s.cards.length >= 4) return s;

          return {
            ...s,
            cards: [...s.cards, card],
          };
        }

        return s;
      });
    }

    const exists =
      newAvailable.includes(card) ||
      newStacks.some((s: any) => s.cards.includes(card));

    if (!exists) newAvailable.push(card);

    setStacks(newStacks);
    setAvailableCards(newAvailable);
    setSelectedCard(null);
  };

  const handleCardTap = (card: string) => {
    setSelectedCard((current) => (current === card ? null : card));
  };

  const handleAreaTap = (target: string) => {
    if (!selectedCard) return;
    moveCardTo(selectedCard, target);
  };

  const handleDragStart = (event: any) => {
    if (mobileTapMode) return;
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    if (mobileTapMode) return;

    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      return;
    }

    moveCardTo(active.id, over.id);
    setActiveId(null);
  };

  const checkGroups = () => {
    setStacks((prev: any[]) => {
      const usedGroups = new Set();

      return prev.map((stack: any) => {
        if (stack.locked) return stack;

        const set = new Set(stack.cards);
        let matchedGroup = null;
        let matchedGroupIndex = -1;

        for (let i = 0; i < selectedGroups.length; i++) {
          if (usedGroups.has(i)) continue;

          const group = selectedGroups[i];

          const isMatch =
            stack.cards.length === 4 &&
            group.words.every((w: string) => set.has(w));

          if (isMatch) {
            matchedGroup = group;
            matchedGroupIndex = i;
            usedGroups.add(i);
            break;
          }
        }

        if (matchedGroup) {
          return {
            ...stack,
            locked: true,
            data: prepareAnswerOptions(matchedGroup, matchedGroupIndex, selectedGame),
            selected: "",
            showAnswer: false,
            wrongSelection: "",
            answerFeedback: "",
            feedback: "",
          };
        }

        let maxMatch = 0;
        let closestSkill = "";

        selectedGroups.forEach((group: any) => {
          const matchCount = group.words.filter((w: string) =>
            set.has(w)
          ).length;

          if (matchCount > maxMatch) {
            maxMatch = matchCount;
            closestSkill = group.skill;
          }
        });

        if (stack.cards.length === 4) {
          setMistakes((m) => m + 1);

          if (closestSkill) {
            setSkillMistakes((prev) => ({
              ...prev,
              [closestSkill]: (prev[closestSkill] || 0) + 1,
            }));
          }
        }

        if (maxMatch >= 2) {
          return {
            ...stack,
            feedback: "You’re close — some of these belong together.",
          };
        }

        return { ...stack, feedback: "" };
      });
    });
  };

  const unlockAnswer = (stackId: string, selectedAnswer?: string) => {
    const stack = stacks.find((s: any) => s.id === stackId);
    const isFinalAnswer =
      stacks.every((s: any) => s.locked) &&
      stacks.filter((s: any) => s.locked && !s.showAnswer).length === 1;

    trackStudioEvent(selectedAnswer ? "answer_correct" : "answer_revealed", {
      game_id: selectedGame.id,
      week: selectedGame.week,
      day: selectedGame.day,
      difficulty: selectedGame.difficulty,
      skill: stack?.data?.skill || "",
      final_answer: isFinalAnswer,
    });

    setStacks((prev: any[]) =>
      prev.map((s: any) =>
        s.id === stackId
          ? {
              ...s,
              selected: selectedAnswer || s.data.correct,
              showAnswer: true,
              wrongSelection: "",
              answerFeedback: selectedAnswer ? "Correct." : "",
            }
          : s
      )
    );

    setTimeout(() => {
      setStacks((prev: any[]) =>
        prev.map((s: any) =>
          s.id === stackId ? { ...s, fading: true } : s
        )
      );
    }, 6500);

    setTimeout(() => {
      setStacks((prev: any[]) =>
        prev.map((s: any) =>
          s.id === stackId
            ? { ...s, collapsed: true, fading: false }
            : s
        )
      );

      if (isFinalAnswer) completePuzzle();
    }, 7000);
  };

  const checkAnswer = (stackId: string) => {
    const stack = stacks.find((s: any) => s.id === stackId);
    if (!stack || stack.showAnswer) return;

    if (!stack.selected) {
      setStacks((prev: any[]) =>
        prev.map((s: any) =>
          s.id === stackId
            ? {
                ...s,
                wrongSelection: "",
                answerFeedback: "Choose an answer first.",
              }
            : s
        )
      );
      return;
    }

    if (stack.selected === stack.data.correct) {
      unlockAnswer(stackId, stack.selected);
      return;
    }

    trackStudioEvent("answer_wrong", {
      game_id: selectedGame.id,
      week: selectedGame.week,
      day: selectedGame.day,
      difficulty: selectedGame.difficulty,
      skill: stack.data.skill,
    });

    setStacks((prev: any[]) =>
      prev.map((s: any) =>
        s.id === stackId
          ? {
              ...s,
              wrongSelection: stack.selected,
              answerFeedback: "Not quite. Try again.",
            }
          : s
      )
    );
  };

  if (completedResult) {
    if (isPlaytestMode) {
      return (
        <PlaytestCompletion
          selectedGame={selectedGame}
          timeMs={completedResult.timeMs}
          mistakes={mistakes}
        />
      );
    }

    return (
      <RichResultsDashboard
        selectedGame={selectedGame}
        result={completedResult}
        history={history}
      />
    );
  }

  if (alreadyCompletedResult && !isEditorPreview && !isPlaytestMode) {
    return (
      <RichResultsDashboard
        selectedGame={selectedGame}
        result={alreadyCompletedResult}
        history={history}
      />
    );
  }

  const selectedDefinition =
    selectedCard && DEFINITIONS[selectedCard] ? DEFINITIONS[selectedCard] : null;

  const activeLensDefinition =
    lensWord && DEFINITIONS[lensWord] ? DEFINITIONS[lensWord] : null;

  const allAnswersRevealed =
    stacks.length > 0 &&
    stacks.every((stack: any) => stack.locked && stack.showAnswer);
  const canViewResults = resultsReady || allAnswersRevealed;

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="game-scroll-guard max-w-2xl mx-auto space-y-5 sm:space-y-8 px-2 sm:px-3 pb-32 sm:pb-24 relative">
        {showTutorial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl max-w-sm w-full p-6 space-y-5 text-center">
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Quick guide
              </p>

              <h2 className="text-2xl font-semibold">How to play</h2>

              <div className="space-y-3 text-sm text-neutral-800 text-left">
                <p>1. Group four connected words.</p>
                <p>2. Choose what connects them.</p>
                <p>3. Read the insight behind the pattern.</p>
                <p>4. A blue dot means Word Lens can define that word.</p>
              </div>

              <button
                onClick={closeTutorial}
                className="w-full bg-neutral-950 text-white py-3 rounded-xl font-medium"
              >
                Start Puzzle
              </button>
            </div>
          </div>
        )}

        {activeLensDefinition && lensWord && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl max-w-sm w-full p-6 space-y-5">
              <div className="text-center space-y-1">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Word Lens
                </p>

                <h2 className="text-2xl font-semibold">{lensWord}</h2>
              </div>

              <div className="space-y-3 text-sm text-neutral-800">
                <p className="font-medium">{activeLensDefinition.short}</p>
                <p>{activeLensDefinition.extended}</p>
              </div>

              <button
                onClick={() => setLensWord(null)}
                className="w-full bg-neutral-950 text-white py-3 rounded-xl font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {selectedCard && (
          <div
            className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1rem)] max-w-md -translate-x-1/2 rounded-xl sm:rounded-2xl border border-white/15 bg-neutral-950 px-3 py-2.5 sm:px-4 sm:py-3 text-white shadow-xl"
            style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center justify-between gap-2 sm:gap-3">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wide opacity-70">
                  Selected Word
                </p>

                <p className="truncate text-lg font-semibold">{selectedCard}</p>
                <p className="text-xs text-white/70">Tap a group to place it.</p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {selectedDefinition && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!selectedCard) return;

                      const word = selectedCard;
                      setExploredLensWords((prev) =>
                        prev.includes(word) ? prev : [...prev, word]
                      );
                      trackStudioEvent("word_lens_opened", {
                        game_id: selectedGame.id,
                        week: selectedGame.week,
                        day: selectedGame.day,
                        difficulty: selectedGame.difficulty,
                        word,
                      });
                      setLensWord(word);
                    }}
                    className="rounded-full bg-white px-2.5 py-2 sm:px-3 text-xs font-semibold text-neutral-950"
                  >
                    Word Lens
                  </button>
                )}

                <button
                  onClick={() => setSelectedCard(null)}
                  className="rounded-full border border-white/30 px-2.5 py-2 sm:px-3 text-xs font-semibold text-white"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}

        <DroppableArea id="available" onTap={() => handleAreaTap("available")}>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {availableCards.map((card: string) => (
              <DraggableCard
                key={card}
                id={card}
                selected={selectedCard === card}
                hasDefinition={Boolean(DEFINITIONS[card])}
                mobileTapMode={mobileTapMode}
                onTap={() => handleCardTap(card)}
              />
            ))}
          </div>
        </DroppableArea>

        {stacks.map((stack: any, i: number) => (
          <DroppableArea
            key={stack.id}
            id={stack.id}
            disabled={stack.locked}
            onTap={() => handleAreaTap(stack.id)}
          >
            {stack.collapsed ? (
              <div className="flex justify-between items-center gap-3 text-sm">
                <span className="font-medium">✓ Group {i + 1}</span>

                <span className="text-neutral-700">{stack.data.correct}</span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    setStacks((prev: any[]) =>
                      prev.map((s: any) =>
                        s.id === stack.id
                          ? { ...s, collapsed: false, fading: false }
                          : s
                      )
                    );
                  }}
                  className="text-sm text-blue-800 font-semibold underline"
                >
                  View
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-neutral-500 font-medium">
                    Group {i + 1}
                  </p>

                  {selectedCard && !stack.locked && stack.cards.length < 4 && (
                    <span className="hidden sm:inline-flex text-xs bg-amber-100 border border-amber-300 px-2 py-1 rounded-full">
                      Tap here to place
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {stack.cards.map((card: string) => (
                    <DraggableCard
                      key={card}
                      id={card}
                      disabled={stack.locked}
                      selected={selectedCard === card}
                      hasDefinition={!stack.locked && Boolean(DEFINITIONS[card])}
                      mobileTapMode={mobileTapMode}
                      onTap={() => handleCardTap(card)}
                    />
                  ))}
                </div>

                {stack.feedback && (
                  <p className="text-sm text-amber-900 bg-amber-100 border border-amber-300 px-3 py-2 rounded-lg">
                    {stack.feedback}
                  </p>
                )}

                {stack.locked && (
                  <div
                    className={`space-y-2 pt-3 transition-opacity duration-500 ${
                      stack.fading ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <p className="text-sm font-semibold">
                      What connects these?
                    </p>

                    {stack.data.options.map((opt: string, idx: number) => {
                      const isSelected = stack.selected === opt;
                      const isCorrect = stack.data.correct === opt;
                      const isWrongSelection = stack.wrongSelection === opt;
                      const optionStateClass =
                        stack.showAnswer && isCorrect
                          ? "bg-emerald-600 text-white border-emerald-700"
                          : isWrongSelection
                          ? "bg-red-600 text-white border-red-700"
                          : isSelected
                          ? "bg-neutral-950 text-white border-neutral-950"
                          : "bg-white text-neutral-900 border-neutral-300";

                      return (
                        <button
                          key={opt}
                          disabled={stack.showAnswer}
                          onClick={(e) => {
                            e.stopPropagation();

                            setStacks((prev: any[]) =>
                              prev.map((s: any) =>
                                s.id === stack.id
                                  ? {
                                      ...s,
                                      selected: opt,
                                      wrongSelection: "",
                                      answerFeedback: "",
                                    }
                                  : s
                              )
                            );
                          }}
                          className={`w-full text-left px-3 py-2 border rounded-lg text-sm transition
                            ${optionStateClass}
                            ${stack.showAnswer ? "cursor-default" : ""}`}
                        >
                          {String.fromCharCode(65 + idx)}. {opt}
                        </button>
                      );
                    })}

                    {stack.answerFeedback && (
                      <p
                        className={`text-sm px-3 py-2 rounded-lg border ${
                          stack.showAnswer
                            ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                            : stack.wrongSelection
                            ? "bg-red-50 border-red-200 text-red-800"
                            : "bg-amber-50 border-amber-200 text-amber-900"
                        }`}
                      >
                        {stack.answerFeedback}
                      </p>
                    )}

                    {!stack.showAnswer && (
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            checkAnswer(stack.id);
                          }}
                          className="bg-neutral-950 text-white border border-neutral-950 px-4 py-2 rounded-lg font-medium"
                        >
                          Check Answer
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            unlockAnswer(stack.id);
                          }}
                          className="bg-white text-neutral-950 border border-neutral-300 px-4 py-2 rounded-lg font-medium"
                        >
                          Reveal Answer
                        </button>
                      </div>
                    )}

                    {stack.showAnswer && stack.data.insight && (
                      <>
                        <div className="bg-neutral-100 border border-neutral-200 p-3 rounded-lg text-sm space-y-1">
                          <p>
                            <strong>{stack.data.insight.pattern}</strong>
                          </p>

                          <p>{stack.data.insight.explanation}</p>

                          <p className="text-neutral-700">
                            {stack.data.insight.generalization}
                          </p>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();

                            setStacks((prev: any[]) =>
                              prev.map((s: any) =>
                                s.id === stack.id
                                  ? { ...s, collapsed: true, fading: false }
                                  : s
                              )
                            );
                          }}
                          className="bg-white text-neutral-950 border border-neutral-300 px-4 py-2 rounded-lg font-medium"
                        >
                          Collapse
                        </button>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </DroppableArea>
        ))}

        {canViewResults && (
          <div className="bg-neutral-950 text-white rounded-2xl p-4 text-center space-y-3">
            <p className="text-sm opacity-80">All insights are unlocked.</p>

            <button
              onClick={completePuzzle}
              className="bg-white text-neutral-950 px-4 py-2 rounded-full text-sm font-semibold"
            >
              View Results
            </button>
          </div>
        )}

        {canViewResults && (
          <button
            onClick={completePuzzle}
            className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 bg-neutral-950 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg border border-white/20"
          >
            View Results
          </button>
        )}

        {!selectedCard && (
          <button
            onClick={checkGroups}
            className="bg-neutral-950 text-white border border-neutral-950 px-4 py-2 rounded-lg font-medium"
          >
            Check Groups
          </button>
        )}

        <DragOverlay>
          {activeId && !mobileTapMode && (
            <div className="px-4 py-2 bg-neutral-950 text-white rounded-lg">
              {activeId}
            </div>
          )}
        </DragOverlay>
      </div>
    </DndContext>
  );
}
