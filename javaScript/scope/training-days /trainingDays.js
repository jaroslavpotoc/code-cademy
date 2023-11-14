// Function to get a random training event
const getRandEvent = () => {
    // Generate a random number between 0 and 2
    const random = Math.floor(Math.random() * 3);

    // Determine the event based on the random number
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

// Function to get training days based on the event
const getTrainingDays = event => {
    // Set a default value for training days
    let days = 50;

    // Adjust training days based on the event type
    if (event === 'Marathon') {
        // Adjust days for Marathon event
    } else if (event === 'Triathlon') {
        // Adjust days for Triathlon event
    } else if (event === 'Pentathlon') {
        // Adjust days for Pentathlon event
    }

    return days;
};

// Global variable for the name 'Nala'
const name = 'Nala';

// Function to log the event for a given name
const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

// Function to log the time to train for a given name and days
const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

// Get a random event and corresponding training days for Nala
const event = getRandEvent();
const days = getTrainingDays(event);

// Log Nala's event and training time
logEvent(name, event);
logTime(name, days);

// Get another random event and corresponding training days for Warren
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

// Log Warren's event and training time
logEvent(name2, event2);
logTime(name2, days2);
