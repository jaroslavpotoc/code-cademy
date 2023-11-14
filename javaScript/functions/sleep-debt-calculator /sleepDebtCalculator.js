// Function to get the recommended sleep hours for a day
const getSleepHours = day => {
    switch (day) {
        // Return the recommended sleep hours for each day
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Saturday':
        case 'Sunday':
            return 8;
        case 'Friday':
            return 12.5;
        // Return an error message for an invalid day
        default:
            return 'Error!';
    }
};

// Function to get the total actual sleep hours for the week
const getActualSleepHours = () =>
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

// Function to get the total ideal sleep hours for the week
const getIdealSleepHours = (idealHours) =>
    idealHours * 7;

// Function to calculate and display sleep debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    
    // Compare actual and ideal sleep hours and display appropriate message
    if (actualSleepHours === idealSleepHours) {
        console.log('You actually got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed.');
    } else {
        console.log('You need more sleep!');
    }

    // Display the difference in sleep hours
    console.log('You actually got: ' + (idealSleepHours - actualSleepHours) + ' hour(s).');
};

// Call the calculateSleepDebt function to check sleep debt
calculateSleepDebt();
