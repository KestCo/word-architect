"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const SKILL_LABELS: any = {
  abstraction: "Abstraction",
  symbolic: "Symbolic Thinking",
  linguistic: "Language Structure",
};

export default function Intro({ user, onStart, onCreateUser }: any) {
  const [entered, setEntered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const enterWorld = () => {
    setTransitioning(true);

    setTimeout(() => {
      setEntered(true);
      setTransitioning(false);
    }, 1200);
  };

  const dailyFocus = useMemo(() => {
    const defaultFocus = [
      "Abstraction",
      "Symbolic Thinking",
      "Language Structure",
    ];

    if (!user || !user.skills || Object.keys(user.skills).length === 0) {
      return defaultFocus;
    }

    const sorted = Object.entries(user.skills).sort(
      (a: any, b: any) => b[1] - a[1]
    );

    const strongest = sorted[0]?.[0];
    const weakest = sorted[sorted.length - 1]?.[0];

    const focusList = [];

    if (weakest) focusList.push(`${SKILL_LABELS[weakest]} (focus)`);

    sorted.slice(1, 3).forEach(([skill]: any) => {
      if (skill !== weakest && skill !== strongest) {
        focusList.push(SKILL_LABELS[skill]);
      }
    });

    if (strongest && strongest !== weakest) {
      focusList.push(`${SKILL_LABELS[strongest]} (reinforce)`);
    }

    return focusList;
  }, [user]);

  if (!entered) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden px-4 relative">

        {/* expanding doorway light */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-1000 ${
            transitioning ? "opacity-100 scale-[2.8]" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-40 h-72 rounded-t-full bg-white/80 blur-xl" />
        </div>

        {/* dark door panels opening */}
        <div
          className={`absolute left-0 top-0 h-full bg-neutral-950 transition-all duration-1000 ${
            transitioning ? "w-0" : "w-1/2"
          }`}
        />

        <div
          className={`absolute right-0 top-0 h-full bg-neutral-950 transition-all duration-1000 ${
            transitioning ? "w-0" : "w-1/2"
          }`}
        />

        <button
          onClick={enterWorld}
          className={`relative z-10 flex flex-col items-center space-y-6 transition-all duration-1000 ease-in-out ${
            transitioning
              ? "scale-[2.4] opacity-0 blur-sm"
              : "scale-100 opacity-100 hover:scale-105"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Word Architect Logo"
            width={260}
            height={260}
            priority
            className="drop-shadow-2xl"
          />

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              The Word Architect
            </h1>

            <p className="text-sm text-neutral-400">
              Tap the mark to enter.
            </p>
          </div>
        </button>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-neutral-200 p-8 space-y-8 text-center">
          <Image
            src="/logo.png"
            alt="Word Architect Logo"
            width={200}
            height={200}
            priority
            className="mx-auto drop-shadow-sm"
          />

          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">The Word Architect</h1>
            <p className="text-sm text-neutral-500">
              Build meaning, one word at a time.
            </p>
          </div>

          <input
            value={nameInput}
            placeholder="Enter your name"
            className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
            onChange={(e) => setNameInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && nameInput.trim()) {
                onCreateUser(nameInput.trim());
              }
            }}
          />

          <button
            onClick={() => nameInput.trim() && onCreateUser(nameInput.trim())}
            className="w-full py-3 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition"
          >
            Begin
          </button>
        </div>
      </main>
    );
  }

  const strongest = Object.entries(user.skills || {}).sort(
    (a: any, b: any) => b[1] - a[1]
  )[0];

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-neutral-200 p-8 space-y-6 text-center">
        <Image
          src="/logo.png"
          alt="Word Architect Logo"
          width={180}
          height={180}
          priority
          className="mx-auto drop-shadow-sm"
        />

        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-neutral-900">
            Welcome back to
          </h1>

          <h2 className="text-3xl font-semibold tracking-tight">
            The Word Architect
          </h2>

          <p className="text-sm text-neutral-500">
            {user.name}, ready to think a little differently today?
          </p>
        </div>

        <div className="flex justify-center gap-6 text-sm text-neutral-600">
          <div>
            <div className="font-medium text-neutral-900">{user.streak}</div>
            <div className="text-xs">day streak</div>
          </div>

          {strongest && (
            <div>
              <div className="font-medium text-neutral-900">
                {SKILL_LABELS[strongest[0]]}
              </div>
              <div className="text-xs">strength</div>
            </div>
          )}
        </div>

        <div className="bg-neutral-100 rounded-2xl p-4 text-left space-y-2">
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            Today’s focus
          </p>

          <ul className="text-sm text-neutral-800 space-y-1">
            {dailyFocus.map((item: string) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full py-3 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition"
        >
          Start today’s puzzle
        </button>
      </div>
    </main>
  );
}