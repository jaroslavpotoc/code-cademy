// Generate a random race number between 0 and 1000 for the runner
let raceNumber = Math.floor(Math.random() * 1000);

// Variables indicating early registration and the age of the runner
const registerecEarly = true;
const ageRunner = 18;

// Adjust race number for early registrants above 18 years old
if (registerecEarly && ageRunner > 18) {
    raceNumber += 1000;
}

// Determine race time and display race information based on registration and age
if (registerecEarly && ageRunner >= 18) {
    console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
} else if (!registerecEarly && ageRunner >= 18) {
    console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`);
} else if (ageRunner < 18) {
    console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`);
} else {
    console.log('Please see registration desk, thanks!');
}
