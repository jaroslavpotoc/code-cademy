// Premená s mojím vekom
const myAge = 26;
// Premená ktorá sa bude meniť
let erlyYears = 2;
erlyYears = erlyYears * 10.5;
let laterYears = myAge - 2;
laterYears = laterYears * 4;

console.log(erlyYears);
console.log(laterYears);

let myAgeInDogYears = erlyYears + laterYears;

const myName = 'Jaroslav Potočný'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);