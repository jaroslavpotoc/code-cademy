let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);

    return humanDifference <= computerDifference;
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;


/* TODO Pravdepodobne ste vypočítali vzdialenosť od odhadu počítača k cieľu a od ľudského odhadu k cieľu. Presuňte to do samostatnej getAbsoluteDistance()funkcie, ktorá vezme dve čísla a vráti vzdialenosť, a potom ju použite vo svojej compareGuesses()funkcii.
  TODO Pridajte funkcionalitu na kontrolu, či používateľ odhaduje medzi 0 a 9 a alert()používateľ, že jeho číslo je mimo rozsahu. +Pomocou tlačidiel a nie je možné nastaviť číslo mimo tohto rozsahu =, ale používatelia to môžu urobiť zadaním priamo do vstupného poľa.
*/