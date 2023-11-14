// Function to calculate weight on different planets based on Earth weight
const calculateWeight = (earthWeight, planet) => {
    // Check the planet and calculate the weight accordingly
    if (planet === 'Mercury') {
        return earthWeight * 0.378;
    } else if (planet === 'Venus') {
        return earthWeight * 0.907;
    } else if (planet === 'Mars') {
        return earthWeight * 0.377;
    } else if (planet === 'Jupiter') {
        return earthWeight * 2.36;
    } else if (planet === 'Saturn') {
        return earthWeight * 0.916;
    } else {
        // Return an error message for invalid planet entries
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
};

// Log the result of the calculateWeight function to the console for testing
console.log(calculateWeight(5.972e24, 'Mercury'));
