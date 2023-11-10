// Function to check if every food item in the array is vegan
const isTheDinnerVegan = (arr) => arr.every((food) => food.source === "plant");

/*
// Alternate solution:
// Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
    // Helper function to check if a food item is vegan
    const isVegan = (food) => {
        if (food.source === 'plant') {
            return true;
        }
        return false;
    }

    // Loop through the array and check if every item is vegan
    for (let i = 0; i < arr.length; i++) {
        if (!isVegan(arr[i])) {
            return false;
        }
    }

    // If all items are vegan, return true
    return true;
}
*/

// Sample dinner array with food items and their sources
const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" },
    { name: "dessert twinkies", source: "unknown" },
];

// Display whether the entire dinner is vegan using the isTheDinnerVegan function
console.log(isTheDinnerVegan(dinner));
