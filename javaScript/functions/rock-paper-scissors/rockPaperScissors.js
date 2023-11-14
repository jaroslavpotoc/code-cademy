// Display a greeting message
console.log('hi');

// Function to get and validate user input
const getUserChoice = userInput => {
    // Convert user input to lowercase
    userInput = userInput.toLowerCase();
    
    // Check if user input is valid (rock, paper, scissors, or bomb)
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log("Error, please type paper, scissors, rock.");
    }
};

// Function to get a random computer choice
const getComputerChoice = () => {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Map the random number to a choice (rock, paper, or scissors)
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

// Function to determine the winner of the game
const determineWinner = (userChoice, computerChoice) => {
    // Check for a tie
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    
    // Check user choices and determine the winner
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
    // Check for the special 'bomb' choice
    if (userChoice === 'bomb') {
        return 'Bomb always wins!';
    }
};

// Function to play the game
const playGame = () => {
    // Get user choice and computer choice
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    
    // Display user and computer choices
    console.log(`You threw: ${userChoice}`);
    console.log(`Computer threw: ${computerChoice}`);
    
    // Determine and display the winner
    console.log(determineWinner(userChoice, computerChoice));
};

// Call the playGame function to play the game
playGame();
