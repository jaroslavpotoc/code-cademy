// Initial array of words
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove the last element from the array
secretMessage.pop();

// Display the length of the modified array
console.log(secretMessage.length);
console.log('\n');

// Display the modified array
console.log(secretMessage);
console.log('\n');

// Add new elements to the end of the array
const addArray = secretMessage.push('to', 'Program');
console.log(secretMessage);
console.log('\n');

// Change an element at a specific index
secretMessage[7] = 'right';
console.log(secretMessage);
console.log('\n');

// Remove the first element from the array
secretMessage.shift();
console.log(secretMessage);
console.log('\n');

// Add a new element to the beginning of the array
secretMessage.unshift('Programming');
console.log(secretMessage);
console.log('\n');

// Remove a range of elements and add a new one in their place
secretMessage.splice(6, 10, 'know');
console.log(secretMessage);
console.log('\n');

// Join the array elements into a single string with spaces
console.log(secretMessage.join(' '));
