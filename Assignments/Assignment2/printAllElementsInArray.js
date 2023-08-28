// Problem 4
// Declare an array
const myArray = [1, 2, 3, 4, 5];

// Function to print array values using a for loop
function printArrayUsingForLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Function to print array values using a while loop
function printArrayUsingWhileLoop(arr) {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

// Call the functions to print the array values
console.log("Printing array using for loop:");
printArrayUsingForLoop(myArray);

console.log("\nPrinting array using while loop:");
printArrayUsingWhileLoop(myArray);

