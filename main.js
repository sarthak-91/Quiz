// ============================================================
//  MAIN.JS  —  Application entry point
//
//  Wires data.js + game.js + ui.js together.
//  Handles routing between screens and user events.
// ============================================================

let timerInterval = null;
let currentQuizId = null;

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderQuizCards(QUIZZES, startQuiz);
  showScreen("home");

  // Guess input events
  document.getElementById("back-btn").addEventListener("click", () => {
  if (getSnapshot()?.status === "playing") {
    if (!confirm("Leave this quiz? Your progress will be lost.")) return;
  }
  onHome();
});
  document.getElementById("guess-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleGuess();
  });
  document.getElementById("guess-btn").addEventListener("click", handleGuess);

  // Give up — reveal all answers and stay on the game page.
  // The button text changes to "See Results →" for the player to
  // manually navigate when they're done reviewing the answers.
  document.getElementById("giveup-btn").addEventListener("click", () => {
    if (!confirm("Give up and reveal all answers?")) return;
    const snapshot = giveUp();
    stopTimer();
    renderGameBoard(snapshot);
    const elapsed = getElapsedSeconds(snapshot);
    showInlineBanner(snapshot, elapsed, onReplay, onHome);
  });
});

// ── Start a quiz ─────────────────────────────────────────────
function startQuiz(quizId) {
  currentQuizId = quizId;
  const quiz = getQuizById(quizId);
  if (!quiz) return;

  // Remove any leftover inline banner from previous game
  const oldBanner = document.getElementById("inline-banner");
  if (oldBanner) oldBanner.remove();

  const snapshot = initGame(quiz);
  renderGameBoard(snapshot);
  showScreen("game");

  // Focus the input
  setTimeout(() => document.getElementById("guess-input").focus(), 100);

  // Start timer
  stopTimer();
  if (snapshot.timerEnabled) {
    timerInterval = setInterval(() => {
      const snap = getSnapshot();
      if (snap && snap.status === "playing") {
        updateTimer(getElapsedSeconds(snap));
      }
    }, 1000);
  }
}

// ── Handle a guess submission ─────────────────────────────────
function handleGuess() {
  const input = document.getElementById("guess-input");
  const text  = input.value;
  if (!text.trim()) return;

  const result = submitGuess(text);
  if (!result) return;

  input.value = "";
  input.focus();

  if (result.matched) {
    flashTiles(result.indices);
  } else {
    shakeInput();
  }

  renderGameBoard(result.snapshot);

  // Game over — show inline banner, stay on game page
  if (result.snapshot.status !== "playing") {
    stopTimer();
    const elapsed = getElapsedSeconds(result.snapshot);
    // Small delay so the final tile reveal animation plays first
    setTimeout(() => showInlineBanner(result.snapshot, elapsed, onReplay, onHome), 600);
  }
}

// ── Replay same quiz ──────────────────────────────────────────
function onReplay() {
  startQuiz(currentQuizId);
}

// ── Go back to home ───────────────────────────────────────────
function onHome() {
  stopTimer();
  const oldBanner = document.getElementById("inline-banner");
  if (oldBanner) oldBanner.remove();
  showScreen("home");
}

// ── Stop the timer interval ───────────────────────────────────
function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}
