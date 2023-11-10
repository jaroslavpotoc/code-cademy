// Function to sort an array of years in descending order
const sortYears = arr => arr.sort((x, y) => y - x);

/*
// Alternative way to define the sortYears function:

// As a function declaration AND using a named function:
function sortYears(arr) {
      // Function to compare two years for sorting
      const checkYears = (year1, year2) => year2 - year1;
      return arr.sort(checkYears);
}
*/

// Array of years
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

// Test the sortYears function with the years array
console.log(sortYears(years));
