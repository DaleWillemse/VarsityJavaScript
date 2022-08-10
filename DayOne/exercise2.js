// Write a program that calculates the remainder when deviding without
// using the mod function (%).

let a = 8;
let b = 3;
let remainder = (a - (b * parseInt(a / b)));
let result = a % b;

console.log(`No mod = ${remainder}`);
console.log(`Using mod = ${result}`);
