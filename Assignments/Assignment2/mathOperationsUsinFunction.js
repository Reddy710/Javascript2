// Problem 2
const readline = require('readline');

// Function to perform addition
function add(a, b) {
  return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
  return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
  return a * b;
}

// Function to perform division
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for the first number
rl.question('Enter the first number: ', (num1) => {
  // Prompt user for the second number
  rl.question('Enter the second number: ', (num2) => {
    // Convert input to integers
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    // Performing calculations
    var sum = add(num1, num2);
    var difference = subtract(num1, num2);
    var product = multiply(num1, num2);
    var quotient = divide(num1, num2);

    // Displaying the results
    console.log("Sum:", sum);
    console.log("Difference:", difference);
    console.log("Product:", product);
    console.log("Quotient:", quotient);

    // Close the readline interface
    rl.close();
  });
});