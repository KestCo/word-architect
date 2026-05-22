"use client";

import { useEffect, useState } from "react";
import { GAMES } from "./data/games";
import {
  DndContext,
  useDraggable,
  useDroppable,
  DragOverlay,
} from "@dnd-kit/core";

/* =========================
   SHUFFLE
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
   CARD
========================= */

function DraggableCard({
  id,
  disabled,
  selected,
  onTap,
  mobileTapMode,
}: {
  id: string;
  disabled?: boolean;
  selected?: boolean;
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
      {...(!mobileTapMode ? listeners : {})}
      {...(!mobileTapMode ? attributes : {})}
      className={`min-w-0 w-full px-2 py-2 rounded-full border transition
        font-semibold tracking-tight text-center
        text-[11px] sm:text-sm
        leading-tight whitespace-normal break-words
        ${
          disabled
            ? "bg-emerald-500 text-neutral-950 border-emerald-600"
            : selected
            ? "bg-neutral-950 text-white border-neutral-950 ring-2 ring-amber-400 scale-105"
            : "bg-amber-100 text-neutral-950 border-amber-300 shadow active:scale-95"
        } ${mobileTapMode ? "cursor-pointer" : "cursor-grab"}`}
    >
      {id}
    </button>
  );
}

/* =========================
   DROP AREA
========================= */

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
  const { setNodeRef, isOver } = useDroppable({
    id,
    disabled,
  });

  return (
    <div
      ref={setNodeRef}
      onClick={onTap}
      className={`p-5 bg-white text-neutral-900 rounded-2xl border border-neutral-200 shadow-sm space-y-4 ${
        isOver && !disabled ? "ring-2 ring-emerald-500" : ""
      } ${onTap && !disabled ? "cursor-pointer" : ""}`}
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
  const [mobileTapMode, setMobileTapMode] = useState(false);

  useEffect(() => {
    const check = () =>
      setMobileTapMode(window.matchMedia("(pointer: coarse)").matches);

    check();

    window.addEventListener("resize", check);

    return () =>
      window.removeEventListener("resize", check);
  }, []);

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

  const [showTutorial, setShowTutorial] = useState(false);

  const [activeId, setActiveId] = useState<string | null>(
    null
  );

  const [selectedCard, setSelectedCard] = useState<
    string | null
  >(null);

  const [startTime] = useState<number>(Date.now());

  const [endTime, setEndTime] = useState<number | null>(
    null
  );

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
     TUTORIAL
  ========================= */

  useEffect(() => {
    if (
      !localStorage.getItem(
        "wordArchitectTutorialSeen"
      )
    ) {
      setShowTutorial(true);
    }
  }, []);

  const closeTutorial = () => {
    localStorage.setItem(
      "wordArchitectTutorialSeen",
      "true"
    );

    setShowTutorial(false);
  };

  /* =========================
     MOVE CARD
  ========================= */

  const moveCardTo = (
    card: string,
    target: string
  ) => {
    const targetStack = stacks.find(
      (s: any) => s.id === target
    );

    if (targetStack?.locked) return;

    let newStacks = stacks.map((s: any) => ({
      ...s,
      cards: s.cards.filter(
        (c: string) => c !== card
      ),
    }));

    let newAvailable = availableCards.filter(
      (c: string) => c !== card
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
    setSelectedCard(null);
  };

  /* =========================
     MOBILE TAP
  ========================= */

  const handleCardTap = (card: string) => {
    setSelectedCard((current) =>
      current === card ? null : card
    );
  };

  const handleAreaTap = (target: string) => {
    if (!selectedCard) return;

    moveCardTo(selectedCard, target);
  };

  /* =========================
     DRAG
  ========================= */

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

  /* =========================
     CHECK GROUPS
  ========================= */

  const checkGroups = () => {
    setStacks((prev: any[]) => {
      const usedGroups = new Set();

      return prev.map((stack: any) => {
        const set = new Set(stack.cards);

        let matchedGroup = null;

        for (
          let i = 0;
          i < selectedGroups.length;
          i++
        ) {
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
     ANSWERS
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
     COMPLETE
  ========================= */

  if (endTime) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow text-center space-y-4">
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
      <div className="max-w-2xl mx-auto space-y-8 px-3 relative">

        {/* tutorial */}
        {showTutorial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl max-w-sm w-full p-6 space-y-5 text-center">
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Quick guide
              </p>

              <h2 className="text-2xl font-semibold">
                How to play
              </h2>

              <div className="space-y-3 text-sm text-neutral-800 text-left">
                <p>
                  1. Group four connected words.
                </p>

                <p>
                  2. Choose what connects them.
                </p>

                <p>
                  3. Read the insight behind the pattern.
                </p>
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

        {/* mobile helper */}
        {selectedCard && (
          <p className="text-center text-sm text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-xl px-3 py-2">
            Selected:{" "}
            <span className="font-semibold">
              {selectedCard}
            </span>
            . Tap a group to place it.
          </p>
        )}

        {/* word bank */}
        <DroppableArea
          id="available"
          onTap={() =>
            handleAreaTap("available")
          }
        >
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {availableCards.map((card: string) => (
              <DraggableCard
                key={card}
                id={card}
                selected={selectedCard === card}
                mobileTapMode={mobileTapMode}
                onTap={() =>
                  handleCardTap(card)
                }
              />
            ))}
          </div>
        </DroppableArea>

        {/* groups */}
        {stacks.map((stack: any, i: number) => (
          <DroppableArea
            key={stack.id}
            id={stack.id}
            disabled={stack.locked}
            onTap={() =>
              handleAreaTap(stack.id)
            }
          >
            {stack.collapsed ? (
              <div className="flex justify-between items-center gap-3 text-sm">
                <span className="font-medium">
                  ✓ Group {i + 1}
                </span>

                <span className="text-neutral-700">
                  {stack.data.correct}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();

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
                    );
                  }}
                  className="text-sm text-blue-800 font-semibold underline"
                >
                  View
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm text-neutral-500 font-medium">
                  Group {i + 1}
                </p>

                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {stack.cards.map(
                    (card: string) => (
                      <DraggableCard
                        key={card}
                        id={card}
                        disabled={stack.locked}
                        selected={
                          selectedCard === card
                        }
                        mobileTapMode={
                          mobileTapMode
                        }
                        onTap={() =>
                          handleCardTap(card)
                        }
                      />
                    )
                  )}
                </div>

                {stack.feedback && (
                  <p className="text-sm text-amber-900 bg-amber-100 border border-amber-300 px-3 py-2 rounded-lg">
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
                    <p className="text-sm font-semibold">
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
                            onClick={(e) => {
                              e.stopPropagation();

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
                              );
                            }}
                            className={`w-full text-left px-3 py-2 border rounded-lg text-sm transition
                              ${
                                isSelected
                                  ? "bg-neutral-950 text-white border-neutral-950"
                                  : "bg-white text-neutral-900 border-neutral-300"
                              }
                              ${
                                stack.showAnswer &&
                                isCorrect
                                  ? "bg-emerald-600 text-white border-emerald-700"
                                  : ""
                              }
                              ${
                                stack.showAnswer &&
                                isSelected &&
                                !isCorrect
                                  ? "bg-red-600 text-white border-red-700"
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
                        onClick={(e) => {
                          e.stopPropagation();

                          revealAnswer(stack.id);
                        }}
                        className="bg-neutral-950 text-white border border-neutral-950 px-4 py-2 rounded-lg font-medium"
                      >
                        Check Answer
                      </button>
                    )}

                    {stack.showAnswer &&
                      stack.data.insight && (
                        <div className="bg-neutral-100 border border-neutral-200 p-3 rounded-lg text-sm space-y-1">
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

                          <p className="text-neutral-700">
                            {
                              stack.data
                                .insight
                                .generalization
                            }
                          </p>
                        </div>
                      )}
                  </div>
                )}
              </>
            )}
          </DroppableArea>
        ))}

        {/* check */}
        <button
          onClick={checkGroups}
          className="bg-neutral-950 text-white border border-neutral-950 px-4 py-2 rounded-lg font-medium"
        >
          Check Groups
        </button>

        {/* drag */}
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