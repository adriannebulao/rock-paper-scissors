// Logic to get computer choice
function getComputerChoice() {
  const comptuerChoice = Math.floor(
    Math.random() * (Math.floor(3) - Math.ceil(1) + 1) + Math.ceil(1)
  );

  switch (comptuerChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}
