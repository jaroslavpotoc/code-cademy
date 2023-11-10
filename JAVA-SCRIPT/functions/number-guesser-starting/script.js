// Variables to track scores and the current round number
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate a random target number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// Log the generated target number to the console for testing
console.log(generateTarget());

// Function to compare guesses and determine the winner
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    // Calculate the absolute differences between guesses and the target
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);

    // Validate humanGuess is within the specified range
    if (humanDifference >= 9 || humanGuess < 0 || humanGuess > 10) {
        alert('Please enter a number between 0 and 10!');
    }

    // Return true if human guess is closer or equal to the target than the computer's guess
    return humanDifference <= computerDifference;
};

// Function to update scores based on the winner
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

// Function to advance to the next round
const advanceRound = () => currentRoundNumber++;
