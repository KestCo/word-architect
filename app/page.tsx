"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Game from "./Game";
import Intro from "./Intro";

function HomeComponent() {
  const [user, setUser] = useState<any>(null);
  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("connections-user");

    if (saved) {
      const parsed = JSON.parse(saved);

      // ✅ Ensure backward compatibility
      if (!parsed.skills) parsed.skills = {};

      setUser(parsed);
    }

    setReady(true);
  }, []);

  const createUser = (name: string) => {
    const newUser = {
      name,
      streak: 1,
      lastPlayed: new Date().toISOString(),
      skills: {},
    };

    localStorage.setItem("connections-user", JSON.stringify(newUser));
    setUser(newUser);
    setStarted(true);
  };

  if (!ready) return null;

  /* =========================
     FIRST TIME USER
  ========================= */

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border p-6 space-y-4 text-center">
          <h1 className="text-lg font-semibold">Welcome</h1>

          <input
            placeholder="Enter your name"
            className="border px-3 py-2 w-full rounded"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                createUser((e.target as any).value);
              }
            }}
          />
        </div>
      </main>
    );
  }

  /* =========================
     RETURNING USER
  ========================= */

  if (!started) {
    return (
      <Intro
        user={user}
        onStart={() => setStarted(true)}
      />
    );
  }

  /* =========================
     GAME VIEW
  ========================= */

  return (
    <main className="min-h-screen bg-neutral-50 p-6 max-w-2xl mx-auto">
      <Game />
    </main>
  );
}

export default dynamic(() => Promise.resolve(HomeComponent), {
  ssr: false,
});