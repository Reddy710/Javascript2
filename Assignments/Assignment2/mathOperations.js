// Problem 2
//   Code used in browsers
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
  
  // Getting input from the user
  
  var num1 = 10 //parseInt("Enter the first number:");
  var num2 = 15 //parseInt("Enter the second number:");
  
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