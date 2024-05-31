const choices = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;

// Logic to get computer choice
function getComputerChoice() {
  const computerChoice = Math.floor(
    Math.random() * (Math.floor(3) - Math.ceil(1) + 1) + Math.ceil(1)
  );

  switch (computerChoice) {
    case 1:
      return choices[0];
    case 2:
      return choices[1];
    case 3:
      return choices[2];
  }
}

// Logic to get human choice and play the entire game
const selectionButtons = document.querySelector(".selection-container");
const result = document.getElementById("result");
const score = document.getElementById("score");

selectionButtons.addEventListener("click", (e) => {
  let humanChoice = e.target.id;

  playRound(humanChoice, getComputerChoice());
  score.innerText =
    "SCORE: Human " + humanScore + " - " + computerScore + " Computer";

  if (humanScore === 5 || computerScore === 5) {
    const buttons = document.querySelectorAll(".selection");
    buttons.forEach((button) => {
      button.disabled = true;
    });

    const winnerText = document.createElement("p");
    winnerText.innerText =
      humanScore > computerScore ? "Human wins!" : "Computer wins!";
    document.getElementById("result-container").appendChild(winnerText);
  }
});

// Logic to play a single round
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result.innerText =
      "You win! " + humanChoice + " beats " + computerChoice + ".";
    humanScore++;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    result.innerText =
      "You lose! " + computerChoice + " beats " + humanChoice + ".";
    computerScore++;
  } else {
    result.innerText = "Draw! Both played " + humanChoice + ".";
  }
}
