"use client";

const GAME_ID = "word-architect";
const PUBLIC_STUDIO_SUPABASE_URL = "https://cquxlcmqfxcnefbmlmzi.supabase.co";
const PUBLIC_STUDIO_SUPABASE_ANON_KEY =
  "sb_publishable_ovRwn4OCOTuZ4xjkusC-0g_NpTJGxoZ";

const supabaseUrl =
  process.env.NEXT_PUBLIC_STUDIO_SUPABASE_URL?.replace(/\/$/, "") ||
  PUBLIC_STUDIO_SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_STUDIO_SUPABASE_ANON_KEY ||
  PUBLIC_STUDIO_SUPABASE_ANON_KEY;

function sessionId() {
  if (typeof window === "undefined") return "";

  try {
    const key = `kestcoStudioSession:${GAME_ID}`;
    const stored = localStorage.getItem(key);
    if (stored) return stored;

    const next =
      crypto && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    localStorage.setItem(key, next);
    return next;
  } catch {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

function cleanPayload(payload: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(payload)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => {
        if (typeof value === "string") return [key, value.slice(0, 160)];
        if (typeof value === "number" || typeof value === "boolean") {
          return [key, value];
        }
        return [key, JSON.stringify(value).slice(0, 240)];
      })
  );
}

function queueEvent(body: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  try {
    const key = `kestcoStudioEventQueue:${GAME_ID}`;
    const queue = JSON.parse(localStorage.getItem(key) || "[]");
    const nextQueue = Array.isArray(queue) ? [...queue, body].slice(-40) : [body];
    localStorage.setItem(key, JSON.stringify(nextQueue));
  } catch {
    // Analytics should never block the game.
  }
}

export function trackStudioEvent(
  eventName: string,
  payload: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;

  const body = {
    game_id: GAME_ID,
    event_name: eventName,
    session_id: sessionId(),
    source: window.location.host || "local",
    route: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || "",
    payload: cleanPayload(payload),
  };

  if (!supabaseUrl || !supabaseAnonKey) {
    queueEvent(body);
    return;
  }

  fetch(`${supabaseUrl}/rest/v1/studio_game_events`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(body),
    keepalive: true,
  }).catch(() => queueEvent(body));
}
