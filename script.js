let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
const compareGuesses = (userGuess, computerGuess, targetNum) => {
    const userDifference = Math.abs(targetNum - userGuess)
    const computerDifference = Math.abs(targetNum - computerGuess)
    if (userDifference <= computerDifference) {
      return true;
    } else if (userDifference > computerDifference) {
      return false;
    }
  }
const updateScore = (theWinnerIs) => {
  if (theWinnerIs === 'human') {
    humanScore++;
  } else if (theWinnerIs === 'computer') {
      computerScore++;
  }
}
const advanceRound = () => {
  currentRoundNumber++;
}