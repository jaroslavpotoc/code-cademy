// The value saved to kelvin will stay constant
const kelvin = 273;
// Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable
const celsius = kelvin - 273;
//Fahrenheit convert from Celsius * (9/5) + 32 + round
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
//The result
console.log(`The temperature is ${fahrenheit} degrees Fahtenheit.`);

const Celsius = 30;
const Newton = Math.floor(Celsius * (33 / 100));
console.log(`The temperature is ${Newton} newton.`)