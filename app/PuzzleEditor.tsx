"use client";

import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import { trackStudioEvent } from "./analytics";
import Game from "./Game";
import { GAMES } from "./data/games";
import { DEFINITIONS } from "./data/definitions";

const EDITOR_ACTION_BUTTONS = {
  preview: {
    background: "#3f3f46",
    hover: "#27272a",
  },
  playtest: {
    background: "#2563eb",
    hover: "#1d4ed8",
  },
  copy: {
    background: "#6b7280",
    hover: "#4b5563",
  },
  submit: {
    background: "#059669",
    hover: "#047857",
  },
};

function editorActionButtonProps(
  variant: keyof typeof EDITOR_ACTION_BUTTONS
) {
  const colors = EDITOR_ACTION_BUTTONS[variant];
  const setBackground = (
    event: SyntheticEvent<HTMLButtonElement>,
    backgroundColor: string
  ) => {
    event.currentTarget.style.backgroundColor = backgroundColor;
  };

  return {
    className: "py-3 rounded-xl font-medium transition",
    style: {
      backgroundColor: colors.background,
      color: "#ffffff",
      boxShadow: "0 10px 18px rgb(23 23 23 / 0.12)",
    },
    onMouseEnter: (event: SyntheticEvent<HTMLButtonElement>) =>
      setBackground(event, colors.hover),
    onMouseLeave: (event: SyntheticEvent<HTMLButtonElement>) =>
      setBackground(event, colors.background),
    onPointerEnter: (event: SyntheticEvent<HTMLButtonElement>) =>
      setBackground(event, colors.hover),
    onPointerLeave: (event: SyntheticEvent<HTMLButtonElement>) =>
      setBackground(event, colors.background),
    onFocus: (event: SyntheticEvent<HTMLButtonElement>) =>
      setBackground(event, colors.hover),
    onBlur: (event: SyntheticEvent<HTMLButtonElement>) =>
      setBackground(event, colors.background),
  };
}

function emptyGroup() {
  return {
    skill: "",
    words: "",
    correct: "",
    options: ["", "", "", ""],
    insight: {
      pattern: "",
      explanation: "",
      generalization: "",
      adaptive: {
        correct: "",
        wrong: "",
      },
    },
  };
}

function normalizeWordLensKey(word: string) {
  return word.trim().replace(/\s+/g, " ").toLowerCase();
}

function parseEditorWords(words: string) {
  return words
    .split(",")
    .map((word) => word.trim())
    .filter(Boolean);
}

const WORD_LENS_LOOKUP = new Map(
  Object.keys(DEFINITIONS).map((word) => [normalizeWordLensKey(word), word])
);

const DRAFT_STORAGE_KEY = "wordArchitectEditorDraftBranches";
const STUDIO_SUPABASE_URL = "https://cquxlcmqfxcnefbmlmzi.supabase.co";
const STUDIO_SUPABASE_ANON_KEY =
  "sb_publishable_ovRwn4OCOTuZ4xjkusC-0g_NpTJGxoZ";
const COMMAND_CENTER_URL = "https://game-studio-kappa.vercel.app/";
const DAY_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const WEEK_OPTIONS = Array.from(new Set(GAMES.map((game) => game.week))).sort(
  (a, b) => a - b
);
const LATEST_WEEK = WEEK_OPTIONS[WEEK_OPTIONS.length - 1] || 1;

function getDayName(day?: number) {
  if (!day) return "";
  return DAY_NAMES[day - 1] || `Day ${day}`;
}

type DraftRecord = {
  draftId: string;
  sourceGameId: string;
  week?: number;
  day?: number;
  title: string;
  status:
    | "draft"
    | "needs_revision"
    | "submitted"
    | "publication_ready"
    | "published"
    | "approved";
  editorName: string;
  publication: string;
  updatedAt: string;
  submittedAt?: string;
  draft: any;
};

function getDraftStatusLabel(status: DraftRecord["status"]) {
  if (status === "submitted") return "Submitted for review";
  if (status === "publication_ready") return "Publication ready";
  if (status === "published") return "Published";
  if (status === "needs_revision") return "Corrections needed";
  if (status === "approved") return "Approved";
  return "Draft saved";
}

function getWordArchitectDraftConfig() {
  return {
    url: STUDIO_SUPABASE_URL,
    anonKey: STUDIO_SUPABASE_ANON_KEY,
  };
}

function readDraftBranches(): Record<string, DraftRecord> {
  if (typeof window === "undefined") return {};

  try {
    const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeDraftBranches(branches: Record<string, DraftRecord>) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(branches));
  } catch (error) {
    console.warn("Word Architect could not save draft branches locally.", error);
  }
}

function getWordLensWords(words: string) {
  const matches = parseEditorWords(words)
    .map((word) => WORD_LENS_LOOKUP.get(normalizeWordLensKey(word)))
    .filter((word): word is string => Boolean(word));

  return Array.from(new Set(matches));
}

function getActiveWordLensCandidates(groups: any[], candidates: string[]) {
  const currentWordKeys = new Set(
    groups.flatMap((group) => parseEditorWords(group.words)).map(normalizeWordLensKey)
  );

  return candidates.filter((word) =>
    currentWordKeys.has(normalizeWordLensKey(word))
  );
}

function composePuzzleDraft({
  originalPuzzle,
  title,
  difficulty,
  vocab,
  editorName,
  publication,
  groups,
  editorNotes,
  tooEasy,
  tooObscure,
  suggestedChanges,
  wordLensCandidates,
}: {
  originalPuzzle: any;
  title: string;
  difficulty: number;
  vocab: string;
  editorName: string;
  publication: string;
  groups: any[];
  editorNotes: string;
  tooEasy: boolean;
  tooObscure: boolean;
  suggestedChanges: string;
  wordLensCandidates: string[];
}) {
  const activeWordLensCandidates = getActiveWordLensCandidates(
    groups,
    wordLensCandidates
  );

  return {
    id: originalPuzzle?.id || Date.now(),
    sourceGameId: originalPuzzle?.id || null,
    title,
    difficulty,
    vocab,
    week: originalPuzzle?.week,
    day: originalPuzzle?.day,
    status: "draft",

    editor: {
      name: editorName,
      publication,
    },

    review: {
      editorNotes,
      tooEasy,
      tooObscure,
      suggestedChanges,
      wordLensCandidates: activeWordLensCandidates,
    },

    groups: groups.map((g: any) => ({
      skill: g.skill,
      words: String(g.words || "")
        .split(",")
        .map((w: string) => w.trim())
        .filter(Boolean),
      correct: g.correct,
      options: g.options,
      insight: g.insight,
    })),
  };
}

async function saveDraftRecordToSupabase(record: DraftRecord) {
  const config = getWordArchitectDraftConfig();
  const payload = {
    draft_id: record.draftId,
    source_game_id: record.sourceGameId,
    week: record.week,
    day: record.day,
    title: record.title,
    status: record.status,
    editor_name: record.editorName,
    publication: record.publication,
    updated_at: record.updatedAt,
    submitted_at: record.submittedAt || null,
    draft: record.draft,
  };

  const response = await fetch(
    `${config.url}/rest/v1/word_architect_drafts?on_conflict=draft_id`,
    {
      method: "POST",
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${config.anonKey}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error(`Draft save failed with status ${response.status}`);
  }
}

async function fetchDraftRecordsFromSupabase() {
  const config = getWordArchitectDraftConfig();
  const response = await fetch(
    `${config.url}/rest/v1/word_architect_drafts?select=*&order=updated_at.desc`,
    {
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${config.anonKey}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Draft load failed with status ${response.status}`);
  }

  return response.json();
}

function WordLensMarkers({
  words,
  candidates,
  onAddCandidate,
  onRemoveCandidate,
}: {
  words: string;
  candidates: string[];
  onAddCandidate: (word: string) => void;
  onRemoveCandidate: (word: string) => void;
}) {
  const editorWords = parseEditorWords(words);
  const lensWords = getWordLensWords(words);
  const regularWords = Array.from(new Set(editorWords.filter(
    (word) => !WORD_LENS_LOOKUP.has(normalizeWordLensKey(word))
  )));
  const candidateKeys = new Set(candidates.map(normalizeWordLensKey));

  if (lensWords.length === 0 && regularWords.length === 0) return null;

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-950">
      {lensWords.length > 0 && (
        <div>
          <p className="font-semibold">Word Lens definitions in this group</p>

          <div className="mt-2 grid gap-2">
            {lensWords.map((word) => (
              <div
                key={word}
                className="rounded-lg bg-white px-3 py-2 text-amber-950 shadow-sm"
              >
                <p className="font-semibold">{word}</p>
                <p className="mt-1">{DEFINITIONS[word].short}</p>
                <p className="mt-1 text-amber-800">
                  {DEFINITIONS[word].extended}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {regularWords.length > 0 && (
        <div className={lensWords.length > 0 ? "mt-3 border-t border-amber-200 pt-3" : ""}>
          <p className="font-semibold">New Word Lens candidates</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {regularWords.map((word) => {
              const isCandidate = candidateKeys.has(normalizeWordLensKey(word));

              return (
                <button
                  key={word}
                  type="button"
                  onClick={() =>
                    isCandidate
                      ? onRemoveCandidate(word)
                      : onAddCandidate(word)
                  }
                  className={
                    isCandidate
                      ? "rounded-full bg-amber-600 px-3 py-1 font-semibold text-white transition hover:bg-amber-700"
                      : "rounded-full bg-white px-3 py-1 font-medium text-amber-900 shadow-sm transition hover:bg-amber-100"
                  }
                >
                  {isCandidate ? `${word} marked` : `Mark ${word}`}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PuzzleEditor() {
  useEffect(() => {
    trackStudioEvent("editor_opened");
  }, []);

  const [originalPuzzle, setOriginalPuzzle] = useState<any>(null);
  const [finalSubmitted, setFinalSubmitted] = useState(false);
  const [workflowGuideOpen, setWorkflowGuideOpen] = useState(false);
  const [wordLensCandidates, setWordLensCandidates] = useState<string[]>([]);

  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [vocab, setVocab] = useState("common");

  const [editorName, setEditorName] = useState("");
  const [publication, setPublication] = useState("");

  const [groups, setGroups] = useState([
    emptyGroup(),
    emptyGroup(),
    emptyGroup(),
  ]);

  const [editorNotes, setEditorNotes] = useState("");
  const [tooEasy, setTooEasy] = useState(false);
  const [tooObscure, setTooObscure] = useState(false);
  const [suggestedChanges, setSuggestedChanges] = useState("");

  const [previewGame, setPreviewGame] = useState<any>(null);
  const [finalJSON, setFinalJSON] = useState("");
  const [draftBranches, setDraftBranches] = useState<Record<string, DraftRecord>>(
    {}
  );
  const [draftReviewOpen, setDraftReviewOpen] = useState(false);
  const [sharedDraftStatus, setSharedDraftStatus] = useState(
    "Shared saving is connected. Load a puzzle to start a draft branch."
  );
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [draftsLoaded, setDraftsLoaded] = useState(false);
  const autosaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSavedDraftSignatureRef = useRef("");
  const initialRouteLoadedRef = useRef(false);
  const [selectedWeek, setSelectedWeek] = useState(LATEST_WEEK);

  const selectedWeekGames = GAMES.filter((game) => game.week === selectedWeek)
    .slice()
    .sort((a, b) => a.day - b.day);

  const loadGame = (gameId: number, options: { forceOriginal?: boolean } = {}) => {
    const game = GAMES.find((g) => g.id === gameId);
    if (!game) return;
    setSelectedWeek(game.week);
    const savedRecord = options.forceOriginal ? undefined : draftBranches[String(game.id)];
    const editorGame = savedRecord?.draft || game;
    const review = editorGame.review || {};
    const nextGroups = editorGame.groups.map((g: any) => ({
      ...g,
      words: Array.isArray(g.words) ? g.words.join(", ") : g.words || "",
    }));
    const nextTitle = editorGame.title || `Week ${game.week} Day ${game.day}`;
    const nextDifficulty = editorGame.difficulty;
    const nextVocab = editorGame.vocab;
    const nextEditorName = editorGame.editor?.name || "";
    const nextPublication =
      editorGame.editor?.publication || editorGame.editor?.newsOrganization || "";
    const nextEditorNotes = review.editorNotes || "";
    const nextTooEasy = Boolean(review.tooEasy);
    const nextTooObscure = Boolean(review.tooObscure);
    const nextSuggestedChanges = review.suggestedChanges || "";
    const nextWordLensCandidates = Array.isArray(review.wordLensCandidates)
      ? review.wordLensCandidates
      : [];

    setOriginalPuzzle(JSON.parse(JSON.stringify(game)));
    setFinalSubmitted(false);
    setFinalJSON("");

    setTitle(nextTitle);
    setDifficulty(nextDifficulty);
    setVocab(nextVocab);
    setEditorName(nextEditorName);
    setPublication(nextPublication);

    setGroups(nextGroups);

    setEditorNotes(nextEditorNotes);
    setTooEasy(nextTooEasy);
    setTooObscure(nextTooObscure);
    setSuggestedChanges(nextSuggestedChanges);
    setWordLensCandidates(nextWordLensCandidates);
    setPreviewGame(null);
    setSharedDraftStatus(
      savedRecord
        ? `Opened saved draft. Last saved ${new Date(
            savedRecord.updatedAt
          ).toLocaleString([], {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })}. ${getDraftStatusLabel(savedRecord.status)}.`
        : "Original puzzle loaded. Editing will autosave a shared draft branch."
    );
    lastSavedDraftSignatureRef.current = JSON.stringify(
      composePuzzleDraft({
        originalPuzzle: game,
        title: nextTitle,
        difficulty: nextDifficulty,
        vocab: nextVocab,
        editorName: nextEditorName,
        publication: nextPublication,
        groups: nextGroups,
        editorNotes: nextEditorNotes,
        tooEasy: nextTooEasy,
        tooObscure: nextTooObscure,
        suggestedChanges: nextSuggestedChanges,
        wordLensCandidates: nextWordLensCandidates,
      })
    );
  };

  const updateGroup = (index: number, field: string, value: any) => {
    const updated: any = [...groups];
    updated[index][field] = value;
    setGroups(updated);
  };

  const updateOption = (
    groupIndex: number,
    optIndex: number,
    value: string
  ) => {
    const updated = [...groups];
    updated[groupIndex].options[optIndex] = value;
    setGroups(updated);
  };

  const updateInsight = (
    groupIndex: number,
    field: string,
    value: string
  ) => {
    const updated: any = [...groups];
    updated[groupIndex].insight[field] = value;
    setGroups(updated);
  };

  const updateAdaptive = (
    groupIndex: number,
    field: string,
    value: string
  ) => {
    const updated: any = [...groups];
    updated[groupIndex].insight.adaptive[field] = value;
    setGroups(updated);
  };

  const activeWordLensCandidates = getActiveWordLensCandidates(
    groups,
    wordLensCandidates
  );

  const addWordLensCandidate = (word: string) => {
    setWordLensCandidates((current) => {
      if (
        current.some(
          (candidate) =>
            normalizeWordLensKey(candidate) === normalizeWordLensKey(word)
        )
      ) {
        return current;
      }

      return [...current, word.trim()];
    });
  };

  const removeWordLensCandidate = (word: string) => {
    setWordLensCandidates((current) =>
      current.filter(
        (candidate) =>
          normalizeWordLensKey(candidate) !== normalizeWordLensKey(word)
      )
    );
  };

  const buildDraftObject = () => {
    return composePuzzleDraft({
      originalPuzzle,
      title,
      difficulty,
      vocab,
      editorName,
      publication,
      groups,
      editorNotes,
      tooEasy,
      tooObscure,
      suggestedChanges,
      wordLensCandidates,
    });
  };

  const buildFinalObject = () => {
    return {
      ...buildDraftObject(),
      status: "final",
      finalizedAt: new Date().toISOString(),
      originalPuzzleId: originalPuzzle?.id || null,
    };
  };

  const buildDraftRecord = (
    status: DraftRecord["status"] = "draft",
    draftOverride?: any
  ): DraftRecord | null => {
    if (!originalPuzzle) return null;

    const now = new Date().toISOString();
    const sourceGameId = String(originalPuzzle.id);
    const draft = draftOverride || buildDraftObject();
    draft.sourceGameId = originalPuzzle.id;
    draft.draftId = `word-architect-${sourceGameId}-editor-draft`;
    draft.draftStatus = status;
    draft.draftUpdatedAt = now;

    if (status === "submitted") {
      draft.submittedAt = now;
    }

    return {
      draftId: draft.draftId,
      sourceGameId,
      week: draft.week,
      day: draft.day,
      title: draft.title || `Week ${draft.week} Day ${draft.day}`,
      status,
      editorName: draft.editor?.name || "",
      publication: draft.editor?.publication || "",
      updatedAt: now,
      submittedAt: status === "submitted" ? now : draft.submittedAt || "",
      draft,
    };
  };

  const saveDraftBranch = async (
    status: DraftRecord["status"] = "draft",
    message = "Saved draft",
    draftOverride?: any
  ) => {
    const record = buildDraftRecord(status, draftOverride);

    if (!record) {
      setSharedDraftStatus("Load a puzzle before saving a draft.");
      return null;
    }

    const nextBranches = {
      ...draftBranches,
      [record.sourceGameId]: record,
    };

    setDraftBranches(nextBranches);
    writeDraftBranches(nextBranches);
    lastSavedDraftSignatureRef.current = JSON.stringify(record.draft);
    setSharedDraftStatus(`${message}. Saving shared draft...`);
    setIsSavingDraft(true);

    try {
      await saveDraftRecordToSupabase(record);
      setSharedDraftStatus(
        `${message}. Shared save complete ${new Date(
          record.updatedAt
        ).toLocaleString([], {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })}.`
      );
    } catch (error) {
      console.warn("Word Architect shared draft save failed.", error);
      setSharedDraftStatus(
        `${message} on this device. Shared save failed, so Copy Draft JSON is the backup.`
      );
    } finally {
      setIsSavingDraft(false);
    }

    return record;
  };


  const resetCurrentDraftToOriginal = () => {
    if (!originalPuzzle) {
      setSharedDraftStatus("Load a puzzle before resetting a draft.");
      return;
    }

    const sourceGame = GAMES.find((game) => game.id === originalPuzzle.id);
    if (!sourceGame) {
      setSharedDraftStatus("Original puzzle could not be found.");
      return;
    }

    loadGame(sourceGame.id, { forceOriginal: true });
    void saveDraftBranch(
      "draft",
      "Reset draft to original puzzle",
      JSON.parse(JSON.stringify(sourceGame))
    );
  };
  const syncRemoteDraftBranches = async () => {
    setSharedDraftStatus("Loading shared drafts...");

    try {
      const rows = await fetchDraftRecordsFromSupabase();
      const realGameIds = new Set(GAMES.map((game) => String(game.id)));
      const remoteBranches: Record<string, DraftRecord> = {};

      rows.forEach((row: any) => {
        if (!row.source_game_id || !row.draft) return;
        if (!realGameIds.has(String(row.source_game_id))) return;

        remoteBranches[String(row.source_game_id)] = {
          draftId: row.draft_id,
          sourceGameId: String(row.source_game_id),
          week: row.week,
          day: row.day,
          title: row.title || `Week ${row.week} Day ${row.day}`,
          status: row.status || "draft",
          editorName: row.editor_name || "",
          publication: row.publication || "",
          updatedAt: row.updated_at,
          submittedAt: row.submitted_at || "",
          draft: row.draft,
        };
      });

      setDraftBranches((current) => {
        const merged = {
          ...current,
          ...remoteBranches,
        };
        writeDraftBranches(merged);
        return merged;
      });
      setSharedDraftStatus(
        Object.keys(remoteBranches).length
          ? "Shared drafts loaded."
          : "Shared saving is connected. No saved drafts yet."
      );
    } catch (error) {
      console.warn("Word Architect could not load shared drafts.", error);
      setSharedDraftStatus(
        "Shared drafts could not load. Local draft saving still works."
      );
    } finally {
      setDraftsLoaded(true);
    }
  };

  useEffect(() => {
    const localBranches = readDraftBranches();
    setDraftBranches(localBranches);
    void syncRemoteDraftBranches();

    return () => {
      if (autosaveTimerRef.current) {
        clearTimeout(autosaveTimerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!draftsLoaded || initialRouteLoadedRef.current) return;
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const requestedGame = Number(params.get("game"));
    const requestedWeek = Number(params.get("week"));
    const requestedDay = Number(params.get("day"));

    const routeGame = Number.isInteger(requestedGame)
      ? GAMES.find((game) => game.id === requestedGame)
      : Number.isInteger(requestedWeek) && Number.isInteger(requestedDay)
      ? GAMES.find(
          (game) => game.week === requestedWeek && game.day === requestedDay
        )
      : undefined;

    if (!routeGame) return;

    initialRouteLoadedRef.current = true;
    loadGame(routeGame.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftsLoaded, draftBranches]);

  useEffect(() => {
    if (!originalPuzzle) return;

    const signature = JSON.stringify(buildDraftObject());
    if (signature === lastSavedDraftSignatureRef.current) return;

    if (autosaveTimerRef.current) {
      clearTimeout(autosaveTimerRef.current);
    }

    autosaveTimerRef.current = setTimeout(() => {
      void saveDraftBranch("draft", "Autosaved draft");
    }, 1000);

    return () => {
      if (autosaveTimerRef.current) {
        clearTimeout(autosaveTimerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    title,
    difficulty,
    vocab,
    editorName,
    publication,
    groups,
    editorNotes,
    tooEasy,
    tooObscure,
    suggestedChanges,
    wordLensCandidates,
    originalPuzzle,
  ]);

  const preview = () => {
    const game = buildDraftObject();
    setPreviewGame(game);
    void saveDraftBranch("draft", "Saved draft for preview", game);
  };

  const playtest = () => {
    const game = buildDraftObject();
    void saveDraftBranch("draft", "Saved draft for playtest", game);

    localStorage.setItem(
      "wordArchitectPlaytest",
      JSON.stringify(game)
    );

    window.open("/", "_blank");
  };

  const copyDraftJSON = async () => {
    const game = buildDraftObject();
    void saveDraftBranch("draft", "Saved draft before export", game);
    await navigator.clipboard.writeText(JSON.stringify(game, null, 2));
    alert("Draft JSON copied to clipboard.");
  };

  const submitFinal = async () => {
    const finalGame = buildFinalObject();
    const json = JSON.stringify(finalGame, null, 2);

    setFinalJSON(json);
    setFinalSubmitted(true);

    await navigator.clipboard.writeText(json);
    await saveDraftBranch(
      "submitted",
      "Submitted final draft for review",
      finalGame
    );

    alert("Final puzzle JSON copied to clipboard.");
  };

  const savedDraftRecords = Object.values(draftBranches)
    .filter((record) =>
      GAMES.some((game) => String(game.id) === record.sourceGameId)
    )
    .sort((a, b) => (a.week || 0) - (b.week || 0) || (a.day || 0) - (b.day || 0));

  return (
    <main className="min-h-screen bg-neutral-50 p-6 space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">
              Puzzle Review Dashboard
            </h1>

            <p className="text-sm text-neutral-500">
              Load an original puzzle, edit a working draft, playtest it, then submit a clean final version.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={COMMAND_CENTER_URL}
              className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-center text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
            >
              Command Center
            </a>

            <button
              type="button"
              onClick={() => setWorkflowGuideOpen((isOpen) => !isOpen)}
              aria-controls="editor-workflow-guide"
              aria-expanded={workflowGuideOpen}
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Workflow Guide
            </button>
          </div>
        </div>

        {workflowGuideOpen && (
          <section
            id="editor-workflow-guide"
            className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-950 shadow-sm"
          >
            <h2 className="font-semibold">Editor Workflow</h2>

            <ol className="mt-3 grid gap-2 pl-5 list-decimal">
              <li>
                <strong>Load the puzzle.</strong> Choose the week and day you want to review.
              </li>
              <li>
                <strong>Add editor details.</strong> Enter your name and publication so the welcome page can credit the edit.
              </li>
              <li>
                <strong>Shape the draft.</strong> Adjust the words, answer choices, connections, and insight text. Your draft branch autosaves as you work.
              </li>
              <li>
                <strong>Review Word Lens.</strong> Existing Word Lens words show definitions. Mark any new word that should become a Word Lens candidate.
              </li>
              <li>
                <strong>Leave review notes.</strong> Flag anything too easy, too obscure, or worth improving.
              </li>
              <li>
                <strong>Preview or playtest.</strong> Preview shows the draft on this page. Playtest opens it like a real game and keeps the draft saved.
              </li>
              <li>
                <strong>Submit final.</strong> Submit Final marks the branch ready for review and still copies the clean JSON as a backup.
              </li>
            </ol>
          </section>
        )}
      </div>

      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wide text-neutral-900">
              Game Library
            </p>
            <p className="text-sm text-neutral-500">
              {originalPuzzle
                ? `Editing draft for Week ${originalPuzzle.week}, ${getDayName(
                    originalPuzzle.day
                  )} - Day ${originalPuzzle.day}. ${title}`
                : "Choose the week, then open the day you want to review."}
            </p>
          </div>

          <label className="w-full space-y-2 sm:w-56">
            <span className="text-xs font-bold uppercase tracking-wide text-neutral-500">
              Week
            </span>
            <select
              data-testid="game-library-week-select"
              value={selectedWeek}
              onChange={(event) => setSelectedWeek(Number(event.target.value))}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base font-medium text-neutral-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            >
              {WEEK_OPTIONS.map((week) => (
                <option key={week} value={week}>
                  Week {week}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {selectedWeekGames.map((game) => {
            const savedRecord = draftBranches[String(game.id)];
            const isActive = originalPuzzle?.id === game.id;
            const statusLabel = savedRecord
              ? getDraftStatusLabel(savedRecord.status)
              : "Original";

            return (
              <button
                key={game.id}
                data-testid={`game-library-day-${game.day}`}
                type="button"
                onClick={() => loadGame(game.id)}
                className={
                  isActive
                    ? "min-h-28 rounded-xl border border-blue-600 bg-blue-50 p-3 text-left shadow-sm transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    : "min-h-28 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-left shadow-sm transition hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                }
              >
                <span className="block text-base font-semibold text-neutral-950">
                  {getDayName(game.day)}
                </span>
                <span className="mt-2 block text-sm text-neutral-600">
                  Day {game.day} - Difficulty {game.difficulty}
                </span>
                <span
                  className={
                    savedRecord
                      ? "mt-2 block text-xs font-semibold text-blue-700"
                      : "mt-2 block text-xs text-neutral-500"
                  }
                >
                  {statusLabel}
                </span>
              </button>
            );
          })}
        </div>

        {originalPuzzle && (
          <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-100 p-4 text-sm">
            <p className="font-medium">Original puzzle preserved</p>
            <p className="mt-1 text-neutral-600">
              Week {originalPuzzle.week}, Day {originalPuzzle.day} - Difficulty{" "}
              {originalPuzzle.difficulty}
            </p>
          </div>
        )}
      </section>

      <section className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-medium">Draft Branch</h2>
            <p className="mt-1 text-sm text-neutral-500">
              {sharedDraftStatus}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => void saveDraftBranch("draft", "Saved draft")}
              disabled={!originalPuzzle || isSavingDraft}
              className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              {isSavingDraft ? "Saving..." : "Save Draft"}
            </button>

            <button
              type="button"
              onClick={resetCurrentDraftToOriginal}
              disabled={!originalPuzzle || isSavingDraft}
              className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              Reset to Original
            </button>

            <button
              type="button"
              onClick={() => {
                setDraftReviewOpen((isOpen) => !isOpen);
                void syncRemoteDraftBranches();
              }}
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Review Saved Drafts
            </button>
          </div>
        </div>

        {draftReviewOpen && (
          <div className="space-y-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            {savedDraftRecords.length === 0 ? (
              <p className="text-sm text-neutral-500">
                No saved draft branches yet.
              </p>
            ) : (
              savedDraftRecords.map((record) => (
                <div
                  key={record.draftId}
                  className="flex flex-col gap-3 rounded-xl bg-white p-3 text-sm shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold">
                      Week {record.week}, Day {record.day}
                    </p>
                    <p className="text-neutral-500">
                      {getDraftStatusLabel(record.status)}{" "}
                      by {record.editorName || "No editor name"}{" "}
                      {record.publication ? `for ${record.publication}` : ""}
                    </p>
                    <p className="text-neutral-400">
                      Last saved{" "}
                      {new Date(record.updatedAt).toLocaleString([], {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => loadGame(Number(record.sourceGameId))}
                    className="rounded-xl border border-neutral-300 px-4 py-2 font-semibold text-neutral-800 transition hover:bg-neutral-100"
                  >
                    Open Draft
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </section>

      <section className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
        <h2 className="font-medium">Editor Information</h2>

        <input
          value={editorName}
          onChange={(e) => setEditorName(e.target.value)}
          placeholder="Editor name"
          className="w-full border rounded px-3 py-2 text-sm"
        />

        <input
          value={publication}
          onChange={(e) => setPublication(e.target.value)}
          placeholder="Publication"
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </section>

      <section className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
        <h2 className="font-medium">Working Draft Info</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Puzzle title"
          className="w-full border rounded px-3 py-2 text-sm"
        />

        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm space-y-1">
            <span>Difficulty</span>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(Number(e.target.value))}
              className="w-full border rounded px-3 py-2"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <option key={n} value={n}>
                  Level {n}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm space-y-1">
            <span>Vocabulary</span>

            <select
              value={vocab}
              onChange={(e) => setVocab(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="common">Common</option>
              <option value="mixed">Mixed</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
        </div>
      </section>

      {groups.map((group: any, i: number) => (
        <section
          key={i}
          className="bg-white p-5 rounded-2xl shadow-sm space-y-4"
        >
          <h2 className="font-medium">Group {i + 1}</h2>

          <input
            value={group.skill}
            onChange={(e) => updateGroup(i, "skill", e.target.value)}
            placeholder="Skill: abstraction, symbolic, linguistic"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            value={group.words}
            onChange={(e) => updateGroup(i, "words", e.target.value)}
            placeholder="Words, comma separated"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <WordLensMarkers
            words={group.words}
            candidates={activeWordLensCandidates}
            onAddCandidate={addWordLensCandidate}
            onRemoveCandidate={removeWordLensCandidate}
          />

          <input
            value={group.correct}
            onChange={(e) => updateGroup(i, "correct", e.target.value)}
            placeholder="Correct connection"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <div className="space-y-2">
            <p className="text-sm font-medium">Answer Options</p>

            {group.options.map((opt: string, j: number) => (
              <input
                key={j}
                value={opt}
                onChange={(e) => updateOption(i, j, e.target.value)}
                placeholder={`Option ${String.fromCharCode(65 + j)}`}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Insight Layer</p>

            <input
              value={group.insight.pattern}
              onChange={(e) => updateInsight(i, "pattern", e.target.value)}
              placeholder="Pattern name"
              className="w-full border rounded px-3 py-2 text-sm"
            />

            <textarea
              value={group.insight.explanation}
              onChange={(e) =>
                updateInsight(i, "explanation", e.target.value)
              }
              placeholder="Explanation"
              className="w-full border rounded px-3 py-2 text-sm min-h-20"
            />

            <textarea
              value={group.insight.generalization}
              onChange={(e) =>
                updateInsight(i, "generalization", e.target.value)
              }
              placeholder="Generalization"
              className="w-full border rounded px-3 py-2 text-sm min-h-20"
            />

            <input
              value={group.insight.adaptive.correct}
              onChange={(e) =>
                updateAdaptive(i, "correct", e.target.value)
              }
              placeholder="Correct feedback"
              className="w-full border rounded px-3 py-2 text-sm"
            />

            <input
              value={group.insight.adaptive.wrong}
              onChange={(e) => updateAdaptive(i, "wrong", e.target.value)}
              placeholder="Wrong feedback"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
        </section>
      ))}

      <section className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
        <h2 className="font-medium">Editor Review Notes</h2>

        <p className="text-sm text-neutral-500 italic">
          Editor challenge: Can this puzzle become cleverer without becoming unfair?
        </p>

        <div className="flex gap-4 text-sm">
          <label>
            <input
              type="checkbox"
              checked={tooEasy}
              onChange={(e) => setTooEasy(e.target.checked)}
              className="mr-2"
            />
            Too easy
          </label>

          <label>
            <input
              type="checkbox"
              checked={tooObscure}
              onChange={(e) => setTooObscure(e.target.checked)}
              className="mr-2"
            />
            Too obscure
          </label>
        </div>

        <textarea
          value={editorNotes}
          onChange={(e) => setEditorNotes(e.target.value)}
          placeholder="Editor notes"
          className="w-full border rounded px-3 py-2 text-sm min-h-24"
        />

        <textarea
          value={suggestedChanges}
          onChange={(e) => setSuggestedChanges(e.target.value)}
          placeholder="Suggested changes"
          className="w-full border rounded px-3 py-2 text-sm min-h-24"
        />

        {activeWordLensCandidates.length > 0 && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950">
            <p className="font-medium">Suggested new Word Lens words</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {activeWordLensCandidates.map((word) => (
                <button
                  key={word}
                  type="button"
                  onClick={() => removeWordLensCandidate(word)}
                  className="rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-amber-700"
                >
                  {word} marked
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">

  <button
    onClick={preview}
    {...editorActionButtonProps("preview")}
  >
    Preview Draft
  </button>

  <button
    onClick={playtest}
    {...editorActionButtonProps("playtest")}
  >
    Playtest Draft
  </button>

  <button
    onClick={copyDraftJSON}
    {...editorActionButtonProps("copy")}
  >
    Copy Draft JSON
  </button>

  <button
    onClick={submitFinal}
    {...editorActionButtonProps("submit")}
  >
    Submit Final
  </button>

</div>

      {finalSubmitted && (
        <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3">
          <h2 className="font-medium text-emerald-900">
            Final version submitted
          </h2>

          <p className="text-sm text-emerald-800">
            The clean final puzzle JSON has been copied to your clipboard.
          </p>

          <textarea
            value={finalJSON}
            readOnly
            className="w-full border rounded px-3 py-2 text-xs min-h-64 font-mono bg-white"
          />
        </section>
      )}

      {previewGame && (
        <section className="border-t pt-8 space-y-4">
          <h2 className="text-xl font-semibold">Draft Preview</h2>
          <Game overrideGame={previewGame} />
        </section>
      )}
    </main>
  );
}
