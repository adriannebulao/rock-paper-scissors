const choices = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;

// Logic to get computer choice
function getComputerChoice() {
  const comptuerChoice = Math.floor(
    Math.random() * (Math.floor(3) - Math.ceil(1) + 1) + Math.ceil(1)
  );

  switch (comptuerChoice) {
    case 1:
      return choices[0];
    case 2:
      return choices[1];
    case 3:
      return choices[2];
  }
}

// Logic to get human choice
function getHumanChoice() {
  let humanChoice;

  do {
    humanChoice = prompt("rock, paper, or scissors?");
  } while (!choices.includes(humanChoice.toLowerCase()));

  return humanChoice.toLowerCase();
}

// Logic to play a single round
function playRound(humanChoice, comptuerChoice) {
  if (
    (humanChoice === "rock" && comptuerChoice === "scissors") ||
    (humanChoice === "paper" && comptuerChoice === "rock") ||
    (humanChoice === "scissors" && comptuerChoice === "paper")
  ) {
    console.log("You win! " + humanChoice + " beats " + comptuerChoice + ".");
    humanScore++;
  } else if (
    (comptuerChoice === "rock" && humanChoice === "scissors") ||
    (comptuerChoice === "paper" && humanChoice === "rock") ||
    (comptuerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log("You lose! " + comptuerChoice + " beats " + humanChoice + ".");
    computerScore++;
  } else {
    console.log("Draw! Both played " + humanChoice + ".");
  }
}

// Logic to play entire game
function playGame() {
  for (let i = 0; i < MAX_ROUNDS; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(
      "SCORE: Human " + humanScore + " - " + computerScore + " Computer"
    );
  }

  if (humanScore > computerScore) {
    console.log("Human wins!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a draw!");
  }
}

playGame();
