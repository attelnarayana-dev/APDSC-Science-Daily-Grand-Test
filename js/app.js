const KEY = "apdsc_daily_grand_test_v2";
const QUESTION_COUNT = 160;
const EXAM_TIME = 2 * 60 * 60;

let state = JSON.parse(
  localStorage.getItem(KEY) ||
  '{"day":1,"used":[],"tests":{},"active":null}'
);

let exam = null;
let timerInterval = null;

// Recover unfinished exams safely.
// Questions become permanently used only after Submit.
(function recoverUnfinishedExam() {
  const active = state.active;
  const currentTest = state.tests?.[state.day];

  const ids = new Set();

  if (active && Array.isArray(active.ids)) {
    active.ids.forEach(id => ids.add(id));
  }

  if (
    currentTest &&
    currentTest.finished === false &&
    Array.isArray(currentTest.ids)
  ) {
    currentTest.ids.forEach(id => ids.add(id));
  }

  if (ids.size > 0) {
    state.used = state.used.filter(id => !ids.has(id));
    save();
  }
})();

function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
}

function escapeHTML(text) {
  return String(text ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[c]));
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getBank() {
  if (state.day === 1) {
    return window.QUESTIONS || [];
  }

  return (
    window.DSC_DAY_BANKS &&
    window.DSC_DAY_BANKS[state.day]
  ) || [];
}

function getUnusedQuestions() {
  const used = new Set(state.used);
  return getBank().filter(q => q.id && !used.has(q.id));
}

async function startExam() {

  const dayConfig =
    (window.DSC_DAYS || [])
      .find(d => d.day === state.day);

  if (dayConfig && dayConfig.status === "locked") {
    alert("Day " + state.day + " is locked. Questions are not ready yet.");
    home();
    return;
  }

  if (state.day > 1) {
    try {
      await window.loadDayBank(state.day);
    } catch (error) {
      console.error(error);
      alert("Unable to load Day " + state.day + " question bank.");
      return;
    }
  }

  const bank = getBank();
  const used = new Set(state.used);

  const unused = shuffle(
    bank.filter(q => q && q.id && !used.has(q.id))
  );

  if (unused.length < QUESTION_COUNT) {
    document.getElementById("app").innerHTML = `
      <main class="wrap">
        <section class="card">
          <h1>Question Bank Not Ready</h1>
          <h2>${unused.length} unique questions available</h2>
          <p>A complete exam requires 160 unused questions.</p>
          <p>
            Required: <b>160</b><br>
            Available: <b>${unused.length}</b><br>
            More required: <b>${QUESTION_COUNT - unused.length}</b>
          </p>
          <button onclick="home()">Back</button>
        </section>
      </main>
    `;
    return;
  }

  const questions = unused.slice(0, QUESTION_COUNT);

  exam = {
    day: state.day,
    questions,
    answers: {},
    review: {},
    current: 0,
    endTime: Date.now() + EXAM_TIME * 1000
  };

  state.tests[state.day] = {
    ids: questions.map(q => q.id),
    finished: false,
    startedAt: Date.now()
  };

  state.active = {
    day: state.day,
    ids: questions.map(q => q.id),
    answers: {},
    review: {},
    current: 0,
    endTime: exam.endTime
  };

  save();
  renderExam();
  startTimer();
}


function startTimer() {

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {

    if (!exam) return;

    const remaining =
      Math.max(0, exam.endTime - Date.now());

    const totalSeconds =
      Math.floor(remaining / 1000);

    const hours =
      String(Math.floor(totalSeconds / 3600)).padStart(2, "0");

    const minutes =
      String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");

    const seconds =
      String(totalSeconds % 60).padStart(2, "0");

    const timer =
      document.getElementById("timer");

    if (timer) {
      timer.textContent =
        `${hours}:${minutes}:${seconds}`;
    }

    if (remaining <= 0) {
      clearInterval(timerInterval);
      submitExam(true);
    }

  }, 1000);
}

function renderExam() {

  const q = exam.questions[exam.current];

  document.getElementById("app").innerHTML = `
    <main class="exam">

      <header class="exam-header">

        <div>
          <div class="eyebrow">
            AP DSC • S.A. SCIENCE
          </div>

          <h1>
            Day ${exam.day} Grand Test
          </h1>

          <p>
            English + తెలుగు
          </p>
        </div>

        <div
          id="timer"
          class="timer"
        >
          02:00:00
        </div>

      </header>

      <div class="progress">
        <span
          style="width:${((exam.current + 1) / QUESTION_COUNT) * 100}%"
        ></span>
      </div>

      <div class="exam-layout">

        <aside class="palette">

          <h3>Questions</h3>

          <div class="question-buttons">

            ${Array.from(
              {length:QUESTION_COUNT},
              (_,i) => `
                <button
                  class="
                    ${i === exam.current ? "current" : ""}
                    ${exam.answers[i] !== undefined ? "answered" : ""}
                    ${exam.review[i] ? "review" : ""}
                  "
                  onclick="goToQuestion(${i})"
                >
                  ${i + 1}
                </button>
              `
            ).join("")}

          </div>

        </aside>

        <section class="question-card">

          <div class="question-info">

            <span>
              Question ${exam.current + 1}
              of ${QUESTION_COUNT}
            </span>

            <span>
              ${escapeHTML(q.subject || "")}
              •
              ${escapeHTML(q.topic || "")}
            </span>

          </div>

          <h2>
            ${escapeHTML(q.question?.en ?? q.q ?? "")}
          </h2>

          <div class="telugu">
            ${escapeHTML(q.question?.te ?? q.te ?? "")}
          </div>

          <div class="options">

            ${(q.options ?? q.o ?? []).map((option,index) => `
              <label class="option">

                <input
                  type="radio"
                  name="answer"
                  ${exam.answers[exam.current] === index ? "checked" : ""}
                  onchange="selectAnswer(${index})"
                >

                <span>
                  <b>${String.fromCharCode(65 + index)}.</b>
                  ${escapeHTML(typeof option === "object" ? `${option.en ?? ""} — ${option.te ?? ""}` : option)}
                </span>

              </label>
            `).join("")}

          </div>

          <div class="actions">

            <button
              class="secondary"
              onclick="previousQuestion()"
              ${exam.current === 0 ? "disabled" : ""}
            >
              Previous
            </button>

            <button
              class="secondary"
              onclick="markReview()"
            >
              ${exam.review[exam.current]
                ? "Unmark Review"
                : "Mark for Review"}
            </button>

            ${
              exam.current < QUESTION_COUNT - 1

              ? `
                <button onclick="nextQuestion()">
                  Save & Next
                </button>
              `

              : `
                <button
                  class="submit"
                  onclick="confirmSubmit()"
                >
                  Submit Test
                </button>
              `
            }

          </div>

        </section>

      </div>

    </main>
  `;

  updateTimerDisplay();
}

function updateTimerDisplay() {

  if (!exam) return;

  const timer =
    document.getElementById("timer");

  if (!timer) return;

  const remaining =
    Math.max(
      0,
      exam.endTime - Date.now()
    );

  const seconds =
    Math.floor(remaining / 1000);

  const h =
    String(Math.floor(seconds / 3600)).padStart(2,"0");

  const m =
    String(Math.floor((seconds % 3600) / 60)).padStart(2,"0");

  const s =
    String(seconds % 60).padStart(2,"0");

  timer.textContent = `${h}:${m}:${s}`;
}

function selectAnswer(index) {

  exam.answers[exam.current] = index;

  saveExamProgress();

  renderExam();
}

function nextQuestion() {

  exam.current =
    Math.min(
      QUESTION_COUNT - 1,
      exam.current + 1
    );

  saveExamProgress();

  renderExam();
}

function previousQuestion() {

  exam.current =
    Math.max(
      0,
      exam.current - 1
    );

  saveExamProgress();

  renderExam();
}

function goToQuestion(index) {

  exam.current = index;

  saveExamProgress();

  renderExam();
}

function markReview() {

  exam.review[exam.current] =
    !exam.review[exam.current];

  saveExamProgress();

  renderExam();
}

function saveExamProgress() {

  state.active = {
    day: exam.day,
    ids: exam.questions.map(q => q.id),
    answers: exam.answers,
    review: exam.review,
    current: exam.current,
    endTime: exam.endTime
  };

  save();
}

function confirmSubmit() {

  const answered =
    Object.keys(exam.answers).length;

  const unanswered =
    QUESTION_COUNT - answered;

  const message =
    unanswered > 0
      ? `${unanswered} questions are unanswered. Submit the test?`
      : "Submit the test now?";

  if (confirm(message)) {
    submitExam(false);
  }
}

function submitExam(autoSubmit) {

  if (!exam) return;

  clearInterval(timerInterval);

  let correct = 0;
  let attempted = 0;

  exam.questions.forEach((q,index) => {

    if (exam.answers[index] !== undefined) {

      attempted++;

      if (exam.answers[index] === q.a) {
        correct++;
      }

    }

  });

  const wrong =
    attempted - correct;

  const unattempted =
    QUESTION_COUNT - attempted;

  const result = {

    day: exam.day,

    ids: exam.questions.map(q => q.id),

    answers: exam.answers,

    review: exam.review,

    correct,

    wrong,

    unattempted,

    score: correct,

    percentage:
      ((correct / QUESTION_COUNT) * 100)
      .toFixed(2),

    autoSubmit,

    finished: true,

    completed:
      new Date().toISOString()

  };

  state.used = Array.from(
    new Set([
      ...state.used,
      ...exam.questions.map(q => q.id)
    ])
  );

  state.tests[exam.day] = result;

  state.active = null;

  state.day++;

  save();

  const questions = exam.questions;

  exam = null;

  showResult(result, questions);
}

function showResult(result, questions) {

  document.getElementById("app").innerHTML = `

    <main class="wrap">

      <header>

        <div>

          <div class="eyebrow">
            TEST COMPLETED
          </div>

          <h1>
            Day ${result.day} Result
          </h1>

        </div>

        <div class="badge">
          ${result.percentage}%
        </div>

      </header>

      ${
        result.autoSubmit
        ? `
          <div class="warning">
            Time completed. Test was automatically submitted.
          </div>
        `
        : ""
      }

      <section class="result-grid">

        <div class="card">
          <b>${result.score}</b>
          <span>Score / 160</span>
        </div>

        <div class="card">
          <b>${result.correct}</b>
          <span>Correct</span>
        </div>

        <div class="card">
          <b>${result.wrong}</b>
          <span>Wrong</span>
        </div>

        <div class="card">
          <b>${result.unattempted}</b>
          <span>Unattempted</span>
        </div>

      </section>

      <section class="card">

        <h2>
          Test Completed Successfully
        </h2>

        <p>
          Questions from this test are now permanently
          marked as used and will not appear in future tests.
        </p>

        <button onclick="home()">
          Back to Dashboard
        </button>

      </section>

    </main>
  `;
}

function home() {

  clearInterval(timerInterval);

  const unused =
    getUnusedQuestions().length;

  const completed =
    Object.values(state.tests)
      .filter(t => t.finished)
      .length;

  document.getElementById("app").innerHTML = `

    <main class="wrap">

      <header>

        <div>

          <div class="eyebrow">
            AP DSC • S.A. SCIENCE
          </div>

          <h1>
            Daily Grand Test
          </h1>

          <p>
            English + తెలుగు
            · Physical Science + Biological Science
          </p>

        </div>

        <div class="badge">
          Day ${state.day}
        </div>

      </header>

      ${
        state.active

        ? `
          <section class="card hero">

            <h2>
              Exam in Progress
            </h2>

            <p>
              Your previous exam is saved.
              Continue without losing your answers.
            </p>

            <button onclick="resumeExam()">
              Continue Day ${state.active.day}
            </button>

          </section>
        `

        : `
          <section class="card hero">

            <h2>
              Today's Grand Test
            </h2>

            <p>
              160 MCQs · 2 Hours ·
              Unique Question Engine
            </p>

            <button onclick="startExam()">
              Start Day ${state.day} Exam
            </button>

            <small>
              ${unused}
              unused unique questions available
            </small>

          </section>
        `
      }

      <section class="card" style="margin-top:20px">

        <h2>📚 90 Days Grand Tests</h2>

        <p>
          Select your Day. Each Day contains 160 unique MCQs.
        </p>

        <div class="day-grid">

          ${
            (window.DSC_DAYS || []).map(d => {

              const completedDay =
                Object.values(state.tests)
                  .some(t => t.finished && t.day === d.day);

              const isActive =
                state.day === d.day;

              const locked =
                d.status === "locked";

              return `
                <button
                  class="day-btn ${isActive ? "selected" : ""} ${locked ? "locked" : ""}"
                  ${locked ? 'disabled' : `onclick="selectDay(${d.day})"`}>

                  <strong>Day ${d.day}</strong>

                  <span>
                    ${
                      completedDay
                        ? "✓ Completed"
                        : locked
                          ? "🔒 Locked"
                          : "▶ Start"
                    }
                  </span>

                </button>
              `;

            }).join("")
          }

        </div>

      </section>

      <section class="stats">

        <div class="card">
          <b>${completed}</b>
          <span>Completed Tests</span>
        </div>

        <div class="card">
          <b>${state.used.length}</b>
          <span>Questions Used</span>
        </div>

        <div class="card">
          <b>${unused}</b>
          <span>Unused Questions</span>
        </div>

      </section>

    </main>
  `;
}

function selectDay(day) {

  const config =
    (window.DSC_DAYS || [])
      .find(d => d.day === day);

  if (!config) return;

  if (config.status === "locked") {
    alert("Day " + day + " is not available yet.");
    return;
  }

  if (state.active) {
    alert("Please finish or continue the current exam first.");
    return;
  }

  state.day = day;
  save();
  home();
}

function resumeExam() {

  if (!state.active) return;

  const map =
    new Map(
      getBank().map(q => [q.id,q])
    );

  const questions =
    state.active.ids
      .map(id => map.get(id));

  if (
    questions.length !== QUESTION_COUNT ||
    questions.some(q => !q)
  ) {
    alert(
      "The question bank is missing questions required for this saved exam."
    );
    return;
  }

  exam = {

    day: state.active.day,

    questions,

    answers:
      state.active.answers || {},

    review:
      state.active.review || {},

    current:
      state.active.current || 0,

    endTime:
      state.active.endTime

  };

  renderExam();

  startTimer();
}

window.startExam = startExam;
window.resumeExam = resumeExam;
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.goToQuestion = goToQuestion;
window.markReview = markReview;
window.confirmSubmit = confirmSubmit;
window.home = home;

setInterval(updateTimerDisplay,1000);

home();
