// Problem 5
// Declare an array
const myArray = [1, 2, 3, 4, 5];

// Function to calculate the sum using a for loop
function calculateSumUsingForLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Function to calculate the sum using a while loop
function calculateSumUsingWhileLoop(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

// Call the functions to calculate the sum
console.log("Sum using for loop:", calculateSumUsingForLoop(myArray));
console.log("Sum using while loop:", calculateSumUsingWhileLoop(myArray));