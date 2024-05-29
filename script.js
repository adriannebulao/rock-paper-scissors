const choices = ["rock", "paper", "scissors"];

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
