// Function to determine life phase based on age
const lifePhase = (age) => {
    // Check if age is outside the valid range
    if (age < 0 || age > 140) {
        return "This is not a valid age";
    } else if (age < 4) {
        return "baby"; // Return 'baby' if age is less than 4
    } else if (age < 13) {
        return "child"; // Return 'child' if age is between 4 and 12
    } else if (age < 20) {
        return "teen"; // Return 'teen' if age is between 13 and 19
    } else if (age < 65) {
        return "adult"; // Return 'adult' if age is between 20 and 64
    } else {
        return "senior citizen"; // Return 'senior citizen' if age is 65 or older
    }
};

// Test the lifePhase function with an age of 4
console.log(lifePhase(4));

// Uncomment the line below when you're ready to try out your function
// console.log(lifePhase(5)) //should print 'child'

// Additional function calls can be added to test the code further
