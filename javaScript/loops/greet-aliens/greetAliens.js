// Function to greet aliens in the array
const greetAliens = arr => {
  // Loop through each alien in the array
  for (let i = 0; i < arr.length; i++) {
      // Display a greeting message for each alien
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  }
};

// Array of aliens to greet
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

// Call the greetAliens function with the aliens array
greetAliens(aliens);
