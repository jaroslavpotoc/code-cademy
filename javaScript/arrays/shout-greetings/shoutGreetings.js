// Function to shout greetings by transforming each word to uppercase and appending '!'
const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

/*
// Alternative way to define the shoutGreetings function:

// As a function declaration AND using a loop:
function shoutGreetings(arr) {
    let shoutArray = [];
    for(let i = 0; i < arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!');
    }
    return shoutArray;
}
*/
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

// Test the shoutGreetings function with the greetings array
console.log(shoutGreetings(greetings));
