"use client";

import { useEffect, useState } from "react";
import Intro from "./Intro";
import Game from "./Game";

type UserProfile = {
  name: string;
  streak: number;
  skills: Record<string, number>;
};

export default function Home() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("wordArchitectUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoaded(true);
  }, []);

  const createUser = (name: string) => {
    const newUser: UserProfile = {
      name,
      streak: 1,
      skills: {
        abstraction: 0,
        symbolic: 0,
        linguistic: 0,
      },
    };

    localStorage.setItem(
      "wordArchitectUser",
      JSON.stringify(newUser)
    );

    setUser(newUser);
  };

  if (!loaded) return null;

  if (!user || !started) {
    return (
      <Intro
        user={user}
        onCreateUser={createUser}
        onStart={() => setStarted(true)}
      />
    );
  }

  return <Game />;
}