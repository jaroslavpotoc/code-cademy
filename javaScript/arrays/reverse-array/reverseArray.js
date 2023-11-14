// Function to reverse an array
const reverseArray = arr => {
    let reversed = [];
    // Iterate through the array in reverse order and push each element to the new array
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed; // Return the reversed array
};

// Array to test the reverseArray function
const sentence = ['sense.','make', 'all', 'will', 'This'];

// Test the reverseArray function with the sentence array
console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];
