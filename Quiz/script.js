// Questions Array
const questions = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Mark Language",
      "None"
    ],
    answer: "Hyper Text Markup Language"
  }
];

// Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;

// Start Quiz
document.getElementById("start-btn").addEventListener("click", () => {
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  loadQuestion();
});

// Load Question
function loadQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", selectAnswer);
    optionsContainer.appendChild(button);
  });
}

// Reset state
function resetState() {
  nextBtn.classList.add("hide");
  optionsContainer.innerHTML = "";
}

// Select Answer
function selectAnswer(e) {
  const selectedBtn = e.target;
  const answer = questions[currentQuestionIndex].answer;

  if (selectedBtn.textContent === answer) {
    score++;
    selectedBtn.style.background = "#28a745"; // green
  } else {
    selectedBtn.style.background = "#dc3545"; // red
  }

  Array.from(optionsContainer.children).forEach(button => {
    button.disabled = true;
    if (button.textContent === answer) {
      button.style.background = "#28a745";
    }
  });

  nextBtn.classList.remove("hide");
}

// Next Question
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Show Result
function showResult() {
  quizScreen.classList.add("hide");
  resultScreen.classList.remove("hide");
  scoreText.textContent = `${score} / ${questions.length}`;
}

// Restart Quiz
document.getElementById("restart-btn").addEventListener("click", () => {
  resultScreen.classList.add("hide");
  startScreen.classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
});
