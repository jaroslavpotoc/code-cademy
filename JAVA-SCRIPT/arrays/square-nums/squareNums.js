// Array of numbers
const numbers = [2, 7, 9, 171, 52, 33, 14];

// Function to square a number
const toSquare = num => num * num;

// Function to square each number in an array using the toSquare function
const squareNums = arr => arr.map(toSquare);

/*
// Alternative ways to define the squareNums function:

// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e);

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare);
}
*/
