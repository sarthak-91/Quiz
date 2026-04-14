// ============================================================
//  GAME.JS  —  Pure game logic (no DOM touching)
//
//  State shape:
//    quiz        – the full quiz object from data.js
//    revealed    – Set of answer indices that have been found
//    guesses     – array of { text, matched: bool }
//    status      – "idle" | "playing" | "won" | "lost"
//    startTime   – Date.now() when game started
//    endTime     – Date.now() when game ended (or null)
//    maxGuesses  – max wrong guesses allowed (0 = unlimited)
//    wrongCount  – number of wrong guesses so far
// ============================================================

const GAME_CONFIG = {
  maxWrongGuesses: 0,       // 0 = unlimited; set e.g. 15 for a limit
  timerEnabled: true,       // show elapsed time
};

let gameState = null;

// ── Initialise ──────────────────────────────────────────────
function initGame(quiz) {
  gameState = {
    quiz,
    revealed: new Set(),
    guesses: [],
    status: "playing",
    startTime: Date.now(),
    endTime: null,
    maxGuesses: GAME_CONFIG.maxWrongGuesses,
    wrongCount: 0,
  };
  return getSnapshot();
}

// ── Submit a guess ──────────────────────────────────────────
// Returns { matched: bool, indices: number[] }
function submitGuess(rawText) {
  if (!gameState || gameState.status !== "playing") return null;

  const text = rawText.trim();
  if (!text) return null;

  // Find every answer index that matches the guess
  const matchedIndices = findMatches(text, gameState.quiz.answers);
  const alreadyAllRevealed = matchedIndices.every((i) =>
    gameState.revealed.has(i)
  );

  const matched = matchedIndices.length > 0 && !alreadyAllRevealed;

  if (matched) {
    matchedIndices.forEach((i) => gameState.revealed.add(i));
  } else {
    gameState.wrongCount++;
  }

  gameState.guesses.push({ text, matched, indices: matchedIndices });

  // Check win / lose conditions
  if (gameState.revealed.size === gameState.quiz.answers.length) {
    gameState.status = "won";
    gameState.endTime = Date.now();
  } else if (
    gameState.maxGuesses > 0 &&
    gameState.wrongCount >= gameState.maxGuesses
  ) {
    gameState.status = "lost";
    gameState.endTime = Date.now();
  }

  return { matched, indices: matchedIndices, snapshot: getSnapshot() };
}

// ── Give up ─────────────────────────────────────────────────
function giveUp() {
  if (!gameState || gameState.status !== "playing") return;
  gameState.status = "lost";
  gameState.endTime = Date.now();
  // Reveal everything
  gameState.quiz.answers.forEach((_, i) => gameState.revealed.add(i));
  return getSnapshot();
}

// ── Snapshot (immutable copy for UI) ────────────────────────
function getSnapshot() {
  if (!gameState) return null;
  return {
    quiz: gameState.quiz,
    revealed: new Set(gameState.revealed),
    guesses: [...gameState.guesses],
    status: gameState.status,
    startTime: gameState.startTime,
    endTime: gameState.endTime,
    maxGuesses: gameState.maxGuesses,
    wrongCount: gameState.wrongCount,
    totalAnswers: gameState.quiz.answers.length,
    timerEnabled: GAME_CONFIG.timerEnabled,
  };
}

// ── Matching logic ──────────────────────────────────────────
// Returns array of answer indices that the text matches
function findMatches(text, answers) {
  const normalised = normalise(text);
  const matched = [];
  answers.forEach((answer, i) => {
    const hits = answer.aliases.some((alias) =>
      normalise(alias).includes(normalised) || normalised.includes(normalise(alias))
    );
    if (hits) matched.push(i);
  });
  return matched;
}

function normalise(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .replace(/[^a-z0-9 ]/g, "")      // strip punctuation
    .trim();
}

// ── Elapsed time helper ──────────────────────────────────────
function getElapsedSeconds(snapshot) {
  if (!snapshot) return 0;
  const end = snapshot.endTime || Date.now();
  return Math.floor((end - snapshot.startTime) / 1000);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
