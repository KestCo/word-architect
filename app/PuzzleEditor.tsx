"use client";

import { useEffect, useState, type SyntheticEvent } from "react";
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

  const loadGame = (gameId: number) => {
    const game = GAMES.find((g) => g.id === gameId);
    if (!game) return;

    setOriginalPuzzle(JSON.parse(JSON.stringify(game)));
    setFinalSubmitted(false);
    setFinalJSON("");

    setTitle(`Week ${game.week} Day ${game.day}`);
    setDifficulty(game.difficulty);
    setVocab(game.vocab);

    setGroups(
      game.groups.map((g: any) => ({
        ...g,
        words: g.words.join(", "),
      }))
    );

    setEditorNotes("");
    setTooEasy(false);
    setTooObscure(false);
    setSuggestedChanges("");
    setWordLensCandidates([]);
    setPreviewGame(null);
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
    return {
      id: originalPuzzle?.id || Date.now(),
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
        words: g.words
          .split(",")
          .map((w: string) => w.trim())
          .filter(Boolean),
        correct: g.correct,
        options: g.options,
        insight: g.insight,
      })),
    };
  };

  const buildFinalObject = () => {
    return {
      ...buildDraftObject(),
      status: "final",
      finalizedAt: new Date().toISOString(),
      originalPuzzleId: originalPuzzle?.id || null,
    };
  };

  const preview = () => {
    setPreviewGame(buildDraftObject());
  };

  const playtest = () => {
    const game = buildDraftObject();

    localStorage.setItem(
      "wordArchitectPlaytest",
      JSON.stringify(game)
    );

    window.open("/", "_blank");
  };

  const copyDraftJSON = async () => {
    const game = buildDraftObject();
    await navigator.clipboard.writeText(JSON.stringify(game, null, 2));
    alert("Draft JSON copied to clipboard.");
  };

  const submitFinal = async () => {
    const finalGame = buildFinalObject();
    const json = JSON.stringify(finalGame, null, 2);

    setFinalJSON(json);
    setFinalSubmitted(true);

    await navigator.clipboard.writeText(json);

    alert("Final puzzle JSON copied to clipboard.");
  };

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
                <strong>Shape the draft.</strong> Adjust the words, answer choices, connections, and insight text.
              </li>
              <li>
                <strong>Review Word Lens.</strong> Existing Word Lens words show definitions. Mark any new word that should become a Word Lens candidate.
              </li>
              <li>
                <strong>Leave review notes.</strong> Flag anything too easy, too obscure, or worth improving.
              </li>
              <li>
                <strong>Preview or playtest.</strong> Preview shows the draft on this page. Playtest opens it like a real game.
              </li>
              <li>
                <strong>Submit final.</strong> Submit Final copies the clean final puzzle JSON so it can be added to the live game.
              </li>
            </ol>
          </section>
        )}
      </div>

      <section className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
        <h2 className="font-medium">Load Original Puzzle</h2>

        <select
          onChange={(e) => loadGame(Number(e.target.value))}
          className="w-full border rounded px-3 py-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select a puzzle
          </option>

          {GAMES.map((g) => (
            <option key={g.id} value={g.id}>
              Week {g.week} — Day {g.day} (Difficulty {g.difficulty})
            </option>
          ))}
        </select>

        {originalPuzzle && (
          <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-4 text-sm space-y-1">
            <p className="font-medium">Original puzzle preserved</p>
            <p>
              Week {originalPuzzle.week}, Day {originalPuzzle.day} · Difficulty{" "}
              {originalPuzzle.difficulty}
            </p>
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
