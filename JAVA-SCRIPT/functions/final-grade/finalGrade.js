// Function to calculate the final grade based on midterm, final, and homework scores
const finalGrade = (midterm, final, homework) => {
    // Check if any of the input grades is outside the valid range
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.';
    }

    // Calculate the average of the three grades
    let average = (midterm + final + homework) / 3;

    // Determine the final grade based on the average
    if (average < 60) {
        return 'F';
    } else if (average < 70) {
        return 'D';
    } else if (average < 80) {
        return 'C';
    } else if (average < 90) {
        return 'B';
    } else {
        return 'A';
    }
};

// Log the result of the finalGrade function to the console for testing
console.log(finalGrade(100, 100, 100));
