"use client";

import { useMemo } from "react";
import Image from "next/image";

const SKILL_LABELS: any = {
  abstraction: "Abstraction",
  symbolic: "Symbolic Thinking",
  linguistic: "Language Structure",
};

export default function Intro({
  user,
  onStart,
  onCreateUser,
}: any) {
  /* =========================
     ADAPTIVE FOCUS
  ========================= */

  const dailyFocus = useMemo(() => {
    const defaultFocus = [
      "Abstraction",
      "Symbolic Thinking",
      "Language Structure",
    ];

    if (!user || !user.skills || Object.keys(user.skills).length === 0) {
      return defaultFocus;
    }

    const entries = Object.entries(user.skills);

    const sorted = entries.sort((a: any, b: any) => b[1] - a[1]);

    const strongest = sorted[0]?.[0];
    const weakest = sorted[sorted.length - 1]?.[0];

    const focusList = [];

    if (weakest) {
      focusList.push(`${SKILL_LABELS[weakest]} (focus)`);
    }

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

  /* =========================
     FIRST TIME USER
  ========================= */

  if (!user) {
    let nameInput = "";

    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 space-y-8 text-center">

          {/* LOGO */}
          <div className="flex flex-col items-center space-y-4">

            <Image
              src="/logo.png"
              alt="Word Architect Logo"
              width={220}
              height={220}
              priority
              className="drop-shadow-sm"
            />

            <div className="space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
                The Word Architect
              </h1>

              <p className="text-sm text-neutral-500">
                Build meaning, one word at a time.
              </p>
            </div>

          </div>

          {/* NAME INPUT */}
          <input
            placeholder="Enter your name"
            className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
            onChange={(e) => (nameInput = e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && nameInput) {
                onCreateUser(nameInput);
              }
            }}
          />

          {/* CTA */}
          <button
            onClick={() => nameInput && onCreateUser(nameInput)}
            className="w-full py-3 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition"
          >
            Begin
          </button>

        </div>

      </main>
    );
  }

  /* =========================
     RETURNING USER
  ========================= */

  const strongest = Object.entries(user.skills || {}).sort(
    (a: any, b: any) => b[1] - a[1]
  )[0];

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 space-y-6 text-center">

        {/* LOGO */}
        <div className="flex flex-col items-center space-y-4">

          <Image
            src="/logo.png"
            alt="Word Architect Logo"
            width={180}
            height={180}
            priority
            className="drop-shadow-sm"
          />

          <div className="space-y-2">
            <h1 className="text-xl font-semibold text-neutral-900">
              Welcome back to <br />
              <span className="text-2xl">
                The Word Architect
              </span>
            </h1>

            <p className="text-sm text-neutral-500">
              {user.name}, ready to think a little differently today?
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="flex justify-center gap-6 text-sm text-neutral-600">

          <div>
            <div className="font-medium text-neutral-900">
              {user.streak}
            </div>
            <div className="text-xs">day streak</div>
          </div>

          {strongest && (
            <div>
              <div className="font-medium text-neutral-900 capitalize">
                {SKILL_LABELS[strongest[0]]}
              </div>
              <div className="text-xs">strength</div>
            </div>
          )}

        </div>

        {/* DAILY FOCUS */}
        <div className="bg-neutral-100 rounded-xl p-4 text-left space-y-2">

          <p className="text-xs uppercase tracking-wide text-neutral-500">
            Today’s focus
          </p>

          <ul className="text-sm text-neutral-800 space-y-1">
            {dailyFocus.map((item: string) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

        </div>

        {/* CTA */}
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