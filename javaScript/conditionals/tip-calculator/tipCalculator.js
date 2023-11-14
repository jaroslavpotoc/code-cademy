// Function to calculate tip based on service quality and total bill
const tipCalculator = (quality, total) => {
    // Check the quality of service and calculate tip accordingly
    if (quality === 'bad') {
        return total / 100 * 5;
    } else if (quality === 'ok') {
        return total / 100 * 15;
    } else if (quality === 'good') {
        return total / 100 * 20;
    } else if (quality === 'excellent') {
        return total / 100 * 30;
    } else {
        // Default tip percentage if quality is not specified
        return total / 100 * 18;
    }
};

// Test the tipCalculator function with 'good' quality and $100 total
console.log(tipCalculator('good', 100));
