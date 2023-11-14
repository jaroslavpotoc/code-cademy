// Function to find the index of the string containing "keys" in an array of strings
const findMyKeys = (stringArray) => {
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].includes("keys")) {
      return i; // Return the index if "keys" is found in the string
    }
  }
  return -1; // Return -1 if "keys" is not found in any string
};

// Array of strings to test the findMyKeys function
const randomStuff = [
"credit card",
"screwdriver",
"receipt",
"gum",
"keys",
"used gum",
"plastic spoon",
];

// Test the findMyKeys function with the randomStuff array
console.log(findMyKeys(randomStuff));

