const choices = ["rock", "paper", "scissors"];
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

// Event listeners for buttons
document.querySelectorAll(".choice-btn").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    playGame(userChoice);
  });
});

// Play Game Function
function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  userChoiceDisplay.textContent = "You chose: " + userChoice;
  computerChoiceDisplay.textContent = "Computer chose: " + computerChoice;

  const winner = getWinner(userChoice, computerChoice);
  winnerDisplay.textContent = "Result: " + winner;

  if (winner === "You Win!") {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    winnerDisplay.style.color = "#28a745";
  } else if (winner === "Computer Wins!") {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    winnerDisplay.style.color = "#dc3545";
  } else {
    winnerDisplay.style.color = "#6c757d";
  }
}

// Decide Winner
function getWinner(user, computer) {
  if (user === computer) {
    return "It's a Draw!";
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  } else {
    return "Computer Wins!";
  }
}
