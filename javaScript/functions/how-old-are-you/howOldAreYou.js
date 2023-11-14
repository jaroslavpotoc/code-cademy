// Function to calculate age based on current age and a future or past year
const howOld = (age, year) => {
    // Get the current date
    let dateToday = new Date();
    // Extract the current year from the date
    let thisYear = dateToday.getFullYear();

    // Calculate the difference between the given year and the current year
    const yearDifference = year - thisYear;
    // Calculate the new age based on the difference
    const newAge = age + yearDifference;

    // Check different cases and return a corresponding message
    if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`;
    } else if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`;
    } else {
        return `You were ${newAge} in the year ${year}`;
    }
};

// Log the result of the howOld function to the console for testing
console.log(howOld(26, 2026));
