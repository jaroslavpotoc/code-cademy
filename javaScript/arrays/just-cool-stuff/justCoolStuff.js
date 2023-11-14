// Function to filter elements from the first array that are present in the second array
const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item));

/*
// Alternative way to define the justCoolStuff function:

// As a function declaration AND using named function with a loop:
function justCoolStuff(firstArray, secondArray) {
    // Function to check if an item is present in the second array
    function isInSecondArray(item) {
        for (let i = 0; i < secondArray.length; i++) {
            if (secondArray[i] === item) {
                return true;
            }
        }
        return false;
    }
    // Return the filtered array using the isInSecondArray function
    return firstArray.filter(isInSecondArray);
}
*/

// Arrays of cool stuff and personal stuff
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

// Test the justCoolStuff function with the provided arrays
console.log(justCoolStuff(myStuff, coolStuff));
