"use client";

import { useState } from "react";
import { GAMES } from "./data/games";
import {
  DndContext,
  useDraggable,
  useDroppable,
  DragOverlay,
} from "@dnd-kit/core";

/* =========================
   SMART SHUFFLE
========================= */

function distributeAndShuffle(groups: any[]) {
  const rows: string[][] = [];

  for (let i = 0; i < 4; i++) {
    const row: string[] = [];

    groups.forEach((group: any) => {
      row.push(group.words[i]);
    });

    for (let j = row.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [row[j], row[k]] = [row[k], row[j]];
    }

    rows.push(row);
  }

  return rows.flat();
}

/* =========================
   UTILS
========================= */

function formatTime(ms: number) {
  const seconds = Math.floor(ms / 1000);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return `${m}m ${s}s`;
}

/* =========================
   DRAG COMPONENTS
========================= */

function DraggableCard({
  id,
  disabled,
}: {
  id: string;
  disabled?: boolean;
}) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
    disabled,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`px-4 py-2 rounded-full text-sm ${
        disabled
          ? "bg-green-200"
          : "bg-white border shadow cursor-grab active:scale-95"
      }`}
    >
      {id}
    </div>
  );
}

function DroppableArea({
  id,
  children,
  disabled,
}: {
  id: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({
    id,
    disabled,
  });

  return (
    <div
      ref={setNodeRef}
      className={`p-5 bg-white rounded-2xl shadow-sm space-y-4 ${
        isOver && !disabled ? "ring-2 ring-green-400" : ""
      }`}
    >
      {children}
    </div>
  );
}

/* =========================
   GAME
========================= */

export default function Game({
  overrideGame,
}: {
  overrideGame?: any;
}) {
  const [selectedGame] = useState(() => {
    if (overrideGame) return overrideGame;

    const today = new Date();
    const day = today.getDay();
    const difficulty = day === 0 ? 7 : day;

    const matchingGames = GAMES.filter(
      (g: any) => g.difficulty === difficulty
    );

    return (
      matchingGames[
        Math.floor(Math.random() * matchingGames.length)
      ] || GAMES[0]
    );
  });

  const selectedGroups = selectedGame.groups;

  const [availableCards, setAvailableCards] = useState<string[]>(
    () => distributeAndShuffle(selectedGroups)
  );

  const [activeId, setActiveId] = useState<string | null>(null);

  const [startTime] = useState<number>(Date.now());
  const [endTime, setEndTime] = useState<number | null>(null);

  const [mistakes, setMistakes] = useState<number>(0);

  const [stacks, setStacks] = useState<any[]>(
    selectedGroups.map((group: any, i: number) => ({
      id: `group-${i}`,
      cards: [],
      locked: false,
      data: group,
      selected: "",
      showAnswer: false,
      collapsed: false,
      fading: false,
      feedback: "",
    }))
  );

  /* =========================
     DRAG
  ========================= */

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      return;
    }

    const card = active.id;
    const target = over.id;

    const targetStack = stacks.find(
      (s: any) => s.id === target
    );

    if (targetStack?.locked) {
      setActiveId(null);
      return;
    }

    let newStacks = stacks.map((s: any) => ({
      ...s,
      cards: s.cards.filter((c: any) => c !== card),
    }));

    let newAvailable = availableCards.filter(
      (c: any) => c !== card
    );

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
      newStacks.some((s: any) =>
        s.cards.includes(card)
      );

    if (!exists) newAvailable.push(card);

    setStacks(newStacks);
    setAvailableCards(newAvailable);
    setActiveId(null);
  };

  /* =========================
     CHECK GROUPS
  ========================= */

  const checkGroups = () => {
    setStacks((prev: any[]) => {
      const usedGroups = new Set();

      return prev.map((stack: any) => {
        const set = new Set(stack.cards);

        let matchedGroup = null;

        for (let i = 0; i < selectedGroups.length; i++) {
          if (usedGroups.has(i)) continue;

          const group = selectedGroups[i];

          const isMatch =
            stack.cards.length === 4 &&
            group.words.every((w: string) =>
              set.has(w)
            );

          if (isMatch) {
            matchedGroup = group;
            usedGroups.add(i);
            break;
          }
        }

        if (matchedGroup) {
          return {
            ...stack,
            locked: true,
            data: matchedGroup,
            feedback: "",
          };
        }

        let maxMatch = 0;

        selectedGroups.forEach((group: any) => {
          const matchCount = group.words.filter(
            (w: string) => set.has(w)
          ).length;

          if (matchCount > maxMatch)
            maxMatch = matchCount;
        });

        if (maxMatch >= 2) {
          return {
            ...stack,
            feedback:
              "You’re close — some of these belong together.",
          };
        }

        if (stack.cards.length === 4) {
          setMistakes((m) => m + 1);
        }

        return {
          ...stack,
          feedback: "",
        };
      });
    });
  };

  /* =========================
     ANSWER + COLLAPSE
  ========================= */

  const revealAnswer = (stackId: string) => {
    const isFinalAnswer =
      stacks.every((s: any) => s.locked) &&
      stacks.filter(
        (s: any) => s.locked && !s.showAnswer
      ).length === 1;

    setStacks((prev: any[]) =>
      prev.map((s: any) =>
        s.id === stackId
          ? { ...s, showAnswer: true }
          : s
      )
    );

    setTimeout(() => {
      setStacks((prev: any[]) =>
        prev.map((s: any) =>
          s.id === stackId
            ? { ...s, fading: true }
            : s
        )
      );
    }, 6500);

    setTimeout(() => {
      setStacks((prev: any[]) =>
        prev.map((s: any) =>
          s.id === stackId
            ? {
                ...s,
                collapsed: true,
                fading: false,
              }
            : s
        )
      );

      if (isFinalAnswer) {
        setEndTime(Date.now());
      }
    }, 7000);
  };

  /* =========================
     PERFORMANCE
  ========================= */

  const getPerformance = () => {
    if (mistakes === 0) return "Excellent";
    if (mistakes <= 2) return "Strong";
    if (mistakes <= 4) return "Good";

    return "Keep practicing";
  };

  /* =========================
     COMPLETE SCREEN
  ========================= */

  if (endTime) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="bg-white p-8 rounded-2xl shadow text-center space-y-4">
          <h1 className="text-2xl font-semibold">
            Complete!
          </h1>

          <p>
            Time:{" "}
            {formatTime(endTime - startTime)}
          </p>

          <p>Mistakes: {mistakes}</p>

          <p>
            Performance: {getPerformance()}
          </p>
        </div>
      </div>
    );
  }

  /* =========================
     UI
  ========================= */

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <DroppableArea id="available">
          <div className="grid grid-cols-4 gap-3">
            {availableCards.map((card: string) => (
              <DraggableCard
                key={card}
                id={card}
              />
            ))}
          </div>
        </DroppableArea>

        {stacks.map((stack: any, i: number) => (
          <DroppableArea
            key={stack.id}
            id={stack.id}
            disabled={stack.locked}
          >
            {stack.collapsed ? (
              <div className="flex justify-between items-center gap-3 text-sm">
                <span>
                  ✓ Group {i + 1}
                </span>

                <span className="text-gray-500">
                  {stack.data.correct}
                </span>

                <button
                  onClick={() =>
                    setStacks((prev: any[]) =>
                      prev.map((s: any) =>
                        s.id === stack.id
                          ? {
                              ...s,
                              collapsed: false,
                              fading: false,
                            }
                          : s
                      )
                    )
                  }
                  className="text-xs text-blue-600"
                >
                  View
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm text-neutral-400">
                  Group {i + 1}
                </p>

                <div className="grid grid-cols-4 gap-3">
                  {stack.cards.map((card: string) => (
                    <DraggableCard
                      key={card}
                      id={card}
                      disabled={stack.locked}
                    />
                  ))}
                </div>

                {stack.feedback && (
                  <p className="text-sm text-yellow-600">
                    {stack.feedback}
                  </p>
                )}

                {stack.locked && (
                  <div
                    className={`space-y-2 pt-3 transition-opacity duration-500 ${
                      stack.fading
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                  >
                    <p className="text-sm font-medium">
                      What connects these?
                    </p>

                    {stack.data.options.map(
                      (
                        opt: string,
                        idx: number
                      ) => {
                        const isSelected =
                          stack.selected === opt;

                        const isCorrect =
                          stack.data.correct ===
                          opt;

                        return (
                          <button
                            key={opt}
                            onPointerDown={(e) =>
                              e.stopPropagation()
                            }
                            onClick={() =>
                              setStacks(
                                (prev: any[]) =>
                                  prev.map(
                                    (s: any) =>
                                      s.id ===
                                      stack.id
                                        ? {
                                            ...s,
                                            selected:
                                              opt,
                                          }
                                        : s
                                  )
                              )
                            }
                            className={`w-full text-left px-3 py-2 border rounded
                              ${
                                isSelected
                                  ? "bg-blue-100"
                                  : ""
                              }
                              ${
                                stack.showAnswer &&
                                isCorrect
                                  ? "bg-green-200"
                                  : ""
                              }
                              ${
                                stack.showAnswer &&
                                isSelected &&
                                !isCorrect
                                  ? "bg-red-200"
                                  : ""
                              }`}
                          >
                            {String.fromCharCode(
                              65 + idx
                            )}
                            . {opt}
                          </button>
                        );
                      }
                    )}

                    {!stack.showAnswer && (
                      <button
                        onClick={() =>
                          revealAnswer(stack.id)
                        }
                        className="bg-black text-white px-3 py-2 rounded"
                      >
                        Check Answer
                      </button>
                    )}

                    {stack.showAnswer &&
                      stack.data.insight && (
                        <div className="bg-gray-100 p-3 rounded text-sm space-y-1">
                          <p>
                            <strong>
                              {
                                stack.data
                                  .insight.pattern
                              }
                            </strong>
                          </p>

                          <p>
                            {
                              stack.data
                                .insight
                                .explanation
                            }
                          </p>

                          <p className="text-gray-600">
                            {
                              stack.data
                                .insight
                                .generalization
                            }
                          </p>

                          <button
                            onClick={() =>
                              setStacks(
                                (
                                  prev: any[]
                                ) =>
                                  prev.map(
                                    (
                                      s: any
                                    ) =>
                                      s.id ===
                                      stack.id
                                        ? {
                                            ...s,
                                            collapsed:
                                              true,
                                            fading:
                                              false,
                                          }
                                        : s
                                  )
                              )
                            }
                            className="mt-2 text-sm text-blue-600"
                          >
                            Collapse
                          </button>
                        </div>
                      )}
                  </div>
                )}
              </>
            )}
          </DroppableArea>
        ))}

        <button
          onClick={checkGroups}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Check Groups
        </button>

        <DragOverlay>
          {activeId && (
            <div className="px-4 py-2 bg-black text-white rounded">
              {activeId}
            </div>
          )}
        </DragOverlay>
      </div>
    </DndContext>
  );
}