// Input string to process
const input = "turpentine and turtles";

// Array of vowels to check against
const vowels = ["a", "e", "i", "o", "u"];

// Array to store matching vowels and specified characters
const resultArray = [];

// Loop through each character in the input string
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    // Check for specific characters and vowels 'e' and 'u'
    if (input[inputIndex] === "e") {
        resultArray.push(input[inputIndex]);
    }
    if (input[inputIndex] === "u") {
        resultArray.push(input[inputIndex]);
    }
    // Nested loop to check against each vowel in the vowels array
    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
        // Check if the current character is a vowel
        if (input[inputIndex] === vowels[vowelIndex]) {
            resultArray.push(input[inputIndex]);
        }
    }
}

// Join the resultArray into a string and convert it to uppercase
const resultString = resultArray.join("").toUpperCase();

// Display the final result
console.log(resultString);
