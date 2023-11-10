// Array of veggies
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

// Function to politely decline a vegetable
const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Checkpoint 1 solutions:
// Function to decline everything in the array
const declineEverything = arr => {
    arr.forEach(politelyDecline);
}

/*
// Alternative way to define the declineEverything function:

// As a function declaration:
function declineEverything(arr) {
    arr.forEach(politelyDecline);
}
*/

// Checkpoint 2 solutions:
// Function to accept everything in the array
const acceptEverything = arr => {
    arr.forEach(e => {
        console.log(`Ok, I guess I will eat some ${e}.`);
    });
}

/*
// Alternative ways to define the acceptEverything function:

// Using a named function and string concatenation:
const grudginglyAccept = veg => {
    console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = arr => {
    arr.forEach(grudginglyAccept);
}

// Using a loop:
const acceptEverything = arr => {
    for(let i = 0; i<arr.length; i++){
        console.log(`Ok, I guess I will eat some ${arr[i]}.`);
    }
}
*/
