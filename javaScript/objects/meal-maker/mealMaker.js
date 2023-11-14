// Object representing a menu item
const menu = {
    // Private properties for meal and price
    _meal: "",
    _price: 0,

    // Setter for the meal property with input validation
    set meal(mealToCheck) {
        // Check if the input is a string before setting the meal
        if (typeof mealToCheck === "string") {
            return (this._meal = mealToCheck);
        }
    },

    // Setter for the price property with input validation
    set price(priceToCheck) {
        // Check if the input is a number before setting the price
        if (typeof priceToCheck === "number") {
            return (this._price = priceToCheck);
        }
    },

    // Getter for todaysSpecial property
    get todaysSpecial() {
        // Check if both meal and price are set before creating the special message
        if (this._meal && this._price) {
            return `Today’s Special is ${this._meal} for $${this._price}!`;
        } else {
            return "Meal or price was not set correctly!";
        }
    },
};

// Set the meal and price for today's special
menu.meal = "Pasta";
menu.price = 10;

// Display the special message using the getter
console.log(menu.todaysSpecial);
