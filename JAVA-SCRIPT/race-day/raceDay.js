let raceNumber = Math.floor(Math.random() * 1000);
const registerecEarly = true;
const ageRunner = 18;

if (registerecEarly && ageRunner > 18) {
    raceNumber += 1000;
}

if (registerecEarly && ageRunner >= 18) {
    console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
} else if (!registerecEarly && ageRunner >= 18) {
    console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`);
} else if (ageRunner < 18) {
    console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`)
} else {
    console.log('Please see registration desk, thanks!')
}