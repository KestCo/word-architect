import { GAMES } from "./games";

const DAILY_GAME_START_DATE = "2026-11-02T00:00:00";

export function getDailyGame(date = new Date()) {
  const startDate = new Date(DAILY_GAME_START_DATE);

  const start = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );

  const current = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const dayNumber = Math.round((current - start) / (1000 * 60 * 60 * 24));

  if (dayNumber < 0) {
    return GAMES[0];
  }

  const safeIndex = ((dayNumber % GAMES.length) + GAMES.length) % GAMES.length;
  return GAMES[safeIndex];
}
