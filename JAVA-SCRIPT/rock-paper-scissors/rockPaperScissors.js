console.log('hi');

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ===  'scissors' || userInput ===  'paper') {
        return userInput;
    } else {
        console.log("Error, please type paper, scissors, rock.");
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, compuer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, compuer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, compuer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`Computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame()
/*
console.log(getComputerChoice());
console.log(getUserChoice('Paper'));
console.log(getUserChoice('Rock'));
console.log(getUserChoice('Scissors'));
console.log(getUserChoice('fork'));
*/