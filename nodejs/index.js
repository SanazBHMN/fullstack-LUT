const { generateRandomNumber } = require("./utils");
const { celciusToFahrenheit } = require("./utils");

console.log(`Random Number: ${generateRandomNumber()}`);

console.log(`40 degrees celcius is ${celciusToFahrenheit(40)} fahrenheit`);
