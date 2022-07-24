console.log("Number constants: ");

console.log("Pi number: " + Math.PI);
console.log("Euler's constant: " + Math.E);
console.log("Natural logarithm of 2 " + Math.LN2);

console.log("");

console.log("Rounding methods: ")

var number = 2.65;
console.log("Number: " + number);

console.log("Rounds up: " + Math.ceil(number));
console.log("Rounds down: " + Math.floor(number));
console.log("Rounds up or rounds down: " + Math.round(number));
console.log("Trims the decimal: " + Math.trunc(number));

console.log("");

console.log("Arithmetic and calculus methods: ");

console.log("Calculates the number to the power: " + Math.pow(2, 3));
console.log("Calculates the square root: " + Math.sqrt(16));
console.log("Calculates the cube root: " + Math.cbrt(8));
console.log("Returns the absolute value: " + Math.abs(-10));
console.log("Logarithmic methods: " + Math.log(2)); //Math.log2(), Math.log10()
console.log("Return the minimum value: " + Math.min(6, 7, 8));
console.log("Return the maximum value: " + Math.max(6, 7, 8));
console.log("Trigonometric methods: " + Math.sin(90)); //Math.cos(), Math.tan()

console.log("");

console.log("Generates a random method: ")
var decimal = Math.random();
console.log(decimal);
console.log(Math.trunc(decimal * 100));

