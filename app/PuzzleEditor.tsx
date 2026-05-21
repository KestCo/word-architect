"use client";

import { useState } from "react";
import Game from "./Game";
import { GAMES } from "./data/games";

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

export default function PuzzleEditor() {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [vocab, setVocab] = useState("common");

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

  /* =========================
     LOAD EXISTING GAME
  ========================= */

  const loadGame = (gameId: number) => {
    const game = GAMES.find((g) => g.id === gameId);

    if (!game) return;

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
  };

  /* =========================
     GROUP UPDATES
  ========================= */

  const updateGroup = (
    index: number,
    field: string,
    value: any
  ) => {
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

  /* =========================
     BUILD GAME
  ========================= */

  const buildGameObject = () => {
    return {
      id: Date.now(),
      title,
      difficulty,
      vocab,
      status: "draft",
      review: {
        editorNotes,
        tooEasy,
        tooObscure,
        suggestedChanges,
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

  const preview = () => {
    setPreviewGame(buildGameObject());
  };

  const copyJSON = async () => {
    const game = buildGameObject();

    await navigator.clipboard.writeText(
      JSON.stringify(game, null, 2)
    );

    alert("Puzzle JSON copied to clipboard.");
  };

  return (
    <main className="min-h-screen bg-neutral-50 p-6 space-y-8 max-w-4xl mx-auto">

      {/* HEADER */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">
          Puzzle Review Dashboard
        </h1>

        <p className="text-sm text-neutral-500">
          Build, test, review, and polish puzzles before publishing.
        </p>
      </div>

      {/* LOAD EXISTING */}
      <section className="bg-white p-5 rounded-2xl shadow-sm space-y-4">

        <h2 className="font-medium">
          Load Starter Puzzle
        </h2>

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

      </section>

      {/* PUZZLE INFO */}
      <section className="bg-white p-5 rounded-2xl shadow-sm space-y-4">

        <h2 className="font-medium">Puzzle Info</h2>

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
              onChange={(e) =>
                setDifficulty(Number(e.target.value))
              }
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

      {/* GROUPS */}
      {groups.map((group: any, i: number) => (
        <section
          key={i}
          className="bg-white p-5 rounded-2xl shadow-sm space-y-4"
        >

          <h2 className="font-medium">
            Group {i + 1}
          </h2>

          <input
            value={group.skill}
            onChange={(e) =>
              updateGroup(i, "skill", e.target.value)
            }
            placeholder="Skill"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            value={group.words}
            onChange={(e) =>
              updateGroup(i, "words", e.target.value)
            }
            placeholder="Words, comma separated"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            value={group.correct}
            onChange={(e) =>
              updateGroup(i, "correct", e.target.value)
            }
            placeholder="Correct connection"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          {/* OPTIONS */}
          <div className="space-y-2">

            <p className="text-sm font-medium">
              Answer Options
            </p>

            {group.options.map((opt: string, j: number) => (
              <input
                key={j}
                value={opt}
                onChange={(e) =>
                  updateOption(i, j, e.target.value)
                }
                placeholder={`Option ${String.fromCharCode(
                  65 + j
                )}`}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            ))}

          </div>

          {/* INSIGHT */}
          <div className="space-y-2">

            <p className="text-sm font-medium">
              Insight Layer
            </p>

            <input
              value={group.insight.pattern}
              onChange={(e) =>
                updateInsight(i, "pattern", e.target.value)
              }
              placeholder="Pattern name"
              className="w-full border rounded px-3 py-2 text-sm"
            />

            <textarea
              value={group.insight.explanation}
              onChange={(e) =>
                updateInsight(
                  i,
                  "explanation",
                  e.target.value
                )
              }
              placeholder="Explanation"
              className="w-full border rounded px-3 py-2 text-sm min-h-20"
            />

            <textarea
              value={group.insight.generalization}
              onChange={(e) =>
                updateInsight(
                  i,
                  "generalization",
                  e.target.value
                )
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
              onChange={(e) =>
                updateAdaptive(i, "wrong", e.target.value)
              }
              placeholder="Wrong feedback"
              className="w-full border rounded px-3 py-2 text-sm"
            />

          </div>

        </section>
      ))}

      {/* REVIEW */}
      <section className="bg-white p-5 rounded-2xl shadow-sm space-y-4">

        <h2 className="font-medium">
          Editor Review
        </h2>

        <p className="text-sm text-neutral-500 italic">
          Editor challenge: Can this puzzle become cleverer
          without becoming unfair?
        </p>

        <div className="flex gap-4 text-sm">

          <label>
            <input
              type="checkbox"
              checked={tooEasy}
              onChange={(e) =>
                setTooEasy(e.target.checked)
              }
              className="mr-2"
            />
            Too easy
          </label>

          <label>
            <input
              type="checkbox"
              checked={tooObscure}
              onChange={(e) =>
                setTooObscure(e.target.checked)
              }
              className="mr-2"
            />
            Too obscure
          </label>

        </div>

        <textarea
          value={editorNotes}
          onChange={(e) =>
            setEditorNotes(e.target.value)
          }
          placeholder="Editor notes"
          className="w-full border rounded px-3 py-2 text-sm min-h-24"
        />

        <textarea
          value={suggestedChanges}
          onChange={(e) =>
            setSuggestedChanges(e.target.value)
          }
          placeholder="Suggested changes"
          className="w-full border rounded px-3 py-2 text-sm min-h-24"
        />

      </section>

      {/* BUTTONS */}
      <div className="flex gap-3">

        <button
          onClick={preview}
          className="flex-1 bg-neutral-800 text-white py-3 rounded-xl"
        >
          Preview Puzzle
        </button>

        <button
          onClick={copyJSON}
          className="flex-1 bg-black text-white py-3 rounded-xl"
        >
          Copy JSON
        </button>

      </div>

      {/* LIVE PREVIEW */}
      {previewGame && (
        <section className="border-t pt-8 space-y-4">

          <h2 className="text-xl font-semibold">
            Live Preview
          </h2>

          <Game overrideGame={previewGame} />

        </section>
      )}

    </main>
  );
}