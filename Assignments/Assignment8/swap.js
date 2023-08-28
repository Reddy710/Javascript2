let a = 5;
let b = 10;

console.log(`Before swapping: a = ${a}, b = ${b}`);

// Swap two numbers without using a third variable
a = a + b;
b = a - b;
a = a - b;

console.log(`After swapping: a = ${a}, b = ${b}`);
