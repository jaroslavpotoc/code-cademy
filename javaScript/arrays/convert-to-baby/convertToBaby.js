// Function to convert each element in the array to "baby" + element
const convertToBaby = arr => {
  const babyArray = [];
  for (let i = 0; i < arr.length; i++) {
      babyArray.push(`baby ${arr[i]}`);
  }
  return babyArray; // Return the new array with "baby" + each element
}

// Array of animals to test the convertToBaby function
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

// Test the convertToBaby function with the animals array
console.log(convertToBaby(animals));
// Should print ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']
