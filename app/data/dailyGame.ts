import { GAMES } from "./games";

const DAILY_GAME_START_DATE = "2026-06-15T00:00:00";

export function getDailyGame(date = new Date()) {
  const startDate = new Date(DAILY_GAME_START_DATE);

  const start = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );

  const current = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const dayNumber = Math.floor(
    (current.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (dayNumber < 0) {
    return GAMES[0];
  }

  const safeIndex = ((dayNumber % GAMES.length) + GAMES.length) % GAMES.length;
  return GAMES[safeIndex];
}
