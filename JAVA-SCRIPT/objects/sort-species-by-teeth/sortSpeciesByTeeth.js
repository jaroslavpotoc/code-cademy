// Array of objects representing different species and their number of teeth
const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Function to sort an array of species objects based on the number of teeth
const sortSpeciesByTeeth = (arr) =>
  // Sort the array of species objects based on the numTeeth property
  arr.sort(
      (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
  );

/*
// Alternate implementation using a named function declaration:
function sortSpeciesByTeeth(arr) {
  // Helper function to compare species objects based on the number of teeth
  const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth;
  
  // Sort the array of species objects based on the compareTeeth function
  return arr.sort(compareTeeth);
}
*/

// Display the sorted array of species objects based on the number of teeth
console.log(sortSpeciesByTeeth(speciesArray));
