// function reverseArray(arr) {
//     let start = 0;
//     let end = arr.length - 1;
  
//     while (start < end) {
//       // Swap the elements at start and end positions
//       let temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;
  
//       // Move the pointers towards the middle
//       start++;
//       end--;
//     }
  
//     return arr;
//   }
  
//   // Example usage:
//   let array = [1, 2, 3, 4, 5];
//   console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]

// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = originalArray.reverse();

// console.log(reversedArray); // [5, 4, 3, 2, 1]

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}

console.log(reversedArray); // [5, 4, 3, 2, 1]

