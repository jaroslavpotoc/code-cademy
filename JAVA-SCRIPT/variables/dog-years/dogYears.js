// Age in human years
const myAge = 26;

// Early years (first 2 years of a dog's life)
let earlyYears = 2;
earlyYears = earlyYears * 10.5; // Each year in early years is equivalent to 10.5 human years

// Later years (remaining years after the first 2)
let laterYears = myAge - 2;
laterYears = laterYears * 4; // Each year in later years is equivalent to 4 human years

// Display early and later years
console.log(earlyYears);
console.log(laterYears);

// Total age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// My name in lowercase
const myName = 'Jaroslav Potočný'.toLowerCase();

// Display the final statement
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
