// ============================================================
//  UI.JS  —  All DOM rendering & UI updates
//
//  This file knows about the DOM but NOT about game rules.
//  It receives a snapshot from game.js and renders it.
// ============================================================

// ── Screen references ────────────────────────────────────────
const screens = {
  home:   document.getElementById("screen-home"),
  game:   document.getElementById("screen-game"),
  result: document.getElementById("screen-result"),
};

// ── Show a single screen ─────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

// ── Render the quiz selection cards on the home screen ───────
function renderQuizCards(quizzes, onSelect) {
  const grid = document.getElementById("quiz-grid");
  grid.innerHTML = "";

  quizzes.forEach((quiz) => {
    const card = document.createElement("button");
    card.className = "quiz-card";
    card.innerHTML = `
      <span class="card-emoji">${quiz.emoji}</span>
      <h3 class="card-title">${quiz.title}</h3>
      <p class="card-sub">${quiz.subtitle}</p>
      <span class="card-cta">Play →</span>
    `;
    card.addEventListener("click", () => onSelect(quiz.id));
    grid.appendChild(card);
  });
}

// ── Render the full game board from a snapshot ───────────────
function renderGameBoard(snapshot) {
  // Header info
  document.getElementById("game-title").textContent = snapshot.quiz.title;
  document.getElementById("game-subtitle").textContent = snapshot.quiz.subtitle;
  document.getElementById("game-emoji").textContent = snapshot.quiz.emoji;

  // Progress
  const found = snapshot.revealed.size;
  const total = snapshot.totalAnswers;
  document.getElementById("progress-text").textContent = `${found} / ${total} found`;
  document.getElementById("progress-bar-fill").style.width =
    `${(found / total) * 100}%`;

  // Wrong guesses counter (if limit set)
  const wrongEl = document.getElementById("wrong-count");
  if (snapshot.maxGuesses > 0) {
    wrongEl.textContent = `Wrong: ${snapshot.wrongCount} / ${snapshot.maxGuesses}`;
    wrongEl.hidden = false;
  } else {
    wrongEl.hidden = true;
  }

  // List tiles
  renderTiles(snapshot);

  // Recent guesses
  renderGuessLog(snapshot.guesses);

  // Input state
  const inputEl = document.getElementById("guess-input");
  const btnEl   = document.getElementById("guess-btn");
  const playing  = snapshot.status === "playing";
  inputEl.disabled = !playing;
  btnEl.disabled   = !playing;
  if (!playing) inputEl.blur();

  // Give-up button
  document.getElementById("giveup-btn").style.display = playing ? "" : "none";
}

// ── Render the answer tiles ──────────────────────────────────
function renderTiles(snapshot) {
  const container = document.getElementById("tiles-container");
  const answers   = snapshot.quiz.answers;

  // Build or update tiles
  if (container.children.length !== answers.length) {
    container.innerHTML = "";
    answers.forEach((_, i) => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.dataset.index = i;
      container.appendChild(tile);
    });
  }

  answers.forEach((answer, i) => {
    const tile = container.querySelector(`[data-index="${i}"]`);
    const isRevealed = snapshot.revealed.has(i);
    tile.className = "tile" + (isRevealed ? " revealed" : "");
    tile.innerHTML = `
      <span class="tile-rank">#${i + 1}</span>
      <span class="tile-label">${isRevealed ? answer.label : "?"}</span>
    `;
  });
}

// ── Flash a tile when just guessed ──────────────────────────
function flashTiles(indices, matched) {
  indices.forEach((i) => {
    const tile = document.querySelector(`[data-index="${i}"]`);
    if (!tile) return;
    tile.classList.add(matched ? "flash-correct" : "flash-wrong");
    setTimeout(() => tile.classList.remove("flash-correct", "flash-wrong"), 600);
  });
}

// ── Flash input field on wrong guess ─────────────────────────
function shakeInput() {
  const input = document.getElementById("guess-input");
  input.classList.add("shake");
  setTimeout(() => input.classList.remove("shake"), 400);
}

// ── Render the scrollable guess log ──────────────────────────
function renderGuessLog(guesses) {
  const log = document.getElementById("guess-log");
  log.innerHTML = guesses
    .slice()
    .reverse()
    .map(
      (g) =>
        `<div class="guess-entry ${g.matched ? "guess-hit" : "guess-miss"}">
          <span class="guess-icon">${g.matched ? "✓" : "✗"}</span>
          <span class="guess-text">${escapeHtml(g.text)}</span>
        </div>`
    )
    .join("");
}

// ── Render the result screen ─────────────────────────────────
function renderResult(snapshot, elapsedSeconds, onReplay, onHome) {
  const won = snapshot.status === "won";
  document.getElementById("result-icon").textContent    = won ? "🎉" : "😔";
  document.getElementById("result-heading").textContent = won ? "You got them all!" : "Better luck next time!";
  document.getElementById("result-quiz-name").textContent = snapshot.quiz.title;

  const found = snapshot.revealed.size;
  const total = snapshot.totalAnswers;
  document.getElementById("result-score").textContent =
    `${found} / ${total} answers found`;

  const wrongs = snapshot.wrongCount;
  document.getElementById("result-wrong").textContent =
    `${wrongs} wrong guess${wrongs !== 1 ? "es" : ""}`;

  if (snapshot.timerEnabled) {
    document.getElementById("result-time").textContent =
      `Time: ${formatTime(elapsedSeconds)}`;
    document.getElementById("result-time").hidden = false;
  } else {
    document.getElementById("result-time").hidden = true;
  }

  document.getElementById("result-replay-btn").onclick = onReplay;
  document.getElementById("result-home-btn").onclick   = onHome;

  showScreen("result");
}

// ── Timer display (called on an interval while playing) ───────
function updateTimer(elapsedSeconds) {
  const el = document.getElementById("timer");
  if (el) el.textContent = formatTime(elapsedSeconds);
}

// ── Tiny helpers ─────────────────────────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
