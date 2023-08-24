// Problem 3
// findColumnSum([[1,-1,4,3], [2,6,-1,-2], [6,-1,0,3]])
 
// function findColumnSum(arr){
//     for(let i=0; i<arr[0].length; i++){
//         let sum = 0
//         for(let j=0; j<arr.length; j++){
//             sum += arr[j][i]
//         }
//         console.log("Sum of each column :" + sum)
//     }
// }

// Problem 1
// function findSmallestSubarrayWithMaxMin(arr) {
//     let minIndex = -1;
//     let maxIndex = -1;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (minIndex === -1 || arr[i] < arr[minIndex]) {
//         minIndex = i;
//       }
  
//       if (maxIndex === -1 || arr[i] > arr[maxIndex]) {
//         maxIndex = i;
//       }
//     }
  
//     if (minIndex === -1 || maxIndex === -1) {
//       return []; // No subarray found
//     }
  
//     let start = minIndex;
//     let end = maxIndex;
  
//     for (let i = maxIndex + 1; i < arr.length; i++) {
//       if (arr[i] > arr[maxIndex]) {
//         end = i;
//       }
//     }
  
//     for (let i = minIndex - 1; i >= 0; i--) {
//       if (arr[i] < arr[minIndex]) {
//         start = i;
//       }
//     }
  
//     return arr.slice(start, end + 1);
//   }
  
//   // Example usage:
//   const arr = [1, 6, 4, 6, 5, 1, 2, 6, 4, 4, 2, 1];
//   const result = findSmallestSubarrayWithMaxMin(arr);
//   console.log(result); // Output: [ 1, 6 ]
  

// problem 2
// function findRowWiseSum(matrix) {
//     const rowSums = [];
  
//     for (let i = 0; i < matrix.length; i++) {
//       const row = matrix[i];
//       let sum = 0;
  
//       for (let j = 0; j < row.length; j++) {
//         sum += row[j];
//       }
  
//       rowSums.push(sum);
//     }
  
//     return rowSums;
//   }
  
//   // Example usage:
//   const matrix = [
//     [1, -1, 4, 3],
//     [2, 6, -1, -2],
//     [6, -1, 0, 3]
//   ];
  
//   const rowSums = findRowWiseSum(matrix);
//   console.log(rowSums); // Output: [7, 5, 8]

// Problem 4

// function printDiagonalElements(matrix) {
//     const n = matrix.length;
  
//     for (let i = 0; i < n; i++) {
//       console.log(matrix[i][i]);
//     }
//   }
  
//   // Example usage:
//   const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   printDiagonalElements(matrix);
//   // Output: 1
//   //         5
//   //         9
  


  
// Problem 5
// findDiagonalSumReverse([[1,2,3],[4,5,6],[7,8,9]])
 
// function findDiagonalSumReverse(arr){
//     let s = 0;
//     let e = arr.length-1
//     while(e>=0){
//         console.log(arr[s][e])
//         s++
//         e--
//     }
// }

// Problem 6
// function printReverseDiagonalElements(matrix) {
//     const numRows = matrix.length;
//     const numCols = matrix[0].length;
  
//     for (let i = 0; i < numRows; i++) {
//       console.log(matrix[i][numCols - i - 1]);
//     }
//   }
  
//   // Example usage:
//   const matrix = [
//     [5, 6, 7, 9],
//     [0, -1, 7, 10],
//     [1, 2, 3, 4],
//     [7, -10, -3]
//   ];
  
//   printReverseDiagonalElements(matrix);
//   // Output: 9
//   //         7
//   //         2
//   //         7

// // Problem 7
// function printBorderElements(matrix) {
//     const numRows = matrix.length;
//     const numCols = matrix[0].length;
  
//     for (let i = 0; i < numRows; i++) {
//       for (let j = 0; j < numCols; j++) {
//         if (i === 0 || i === numRows - 1 || j === 0 || j === numCols - 1) {
//           console.log(matrix[i][j]);
//         }
//       }
//     }
//   }
  
//   // Example usage:
//   const matrix = [
//     [5, 6, 7, 9],
//     [0, -1, 7, 10],
//     [1, 2, 3, 4],
//     [7, -10, -3, 2]
//   ];
  
//   printBorderElements(matrix);
//   // Output: 5
//     // 5
//     // 6
//     // 7
//     // 9
//     // 0
//     // 10
//     // 1
//     // 4
//     // 7
//     // -10
//     // -3
//     // 2
  

// function printDiagonalElements(matrix) {
//     const numRows = matrix.length;
//     const numCols = matrix[0].length;
  
//     // Print diagonal elements starting from the last row, first column
//     for (let i = numRows - 1; i >= 0; i--) {
//       let row = i;
//       let col = 0;
  
//       while (row < numRows && col < numCols) {
//         console.log(matrix[row][col]);
//         row++;
//         col++;
//       }
//     }
  
//     // Print diagonal elements starting from the first row, last column
//     for (let j = 1; j < numCols; j++) {
//       let row = 0;
//       let col = j;
  
//       while (row < numRows && col < numCols) {
//         console.log(matrix[row][col]);
//         row++;
//         col++;
//       }
//     }
//   }
  
//   // Example usage:
//   const matrix = [
//     [1, 2, 3, 4, 5],
//     [-1, 6, 7, 11, 12],
//     [13, -3, 4, 6, 13],
//     [21, 13, 0, 3, 8]
//   ];
  
//   printDiagonalElements(matrix);
//   // Output: 21
//     21
//     13
//     13
//     -1
//     -3
//     0
//     1
//     6
//     4
//     3
//     2
//     7
//     6
//     8
//     3
//     11
//     13
//     4
//     12
//     5
  






  function printDiagonalElementsReverse(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    // Print diagonal elements starting from the last row, last column
    for (let i = numRows - 1; i >= 0; i--) {
      let row = i;
      let col = numCols - 1;
  
      while (row < numRows && col >= 0) {
        console.log(matrix[row][col]);
        row++;
        col--;
      }
    }
  
    // Print diagonal elements starting from the first row, first column
    for (let j = numCols - 2; j >= 0; j--) {
      let row = 0;
      let col = j;
  
      while (row < numRows && col >= 0) {
        console.log(matrix[row][col]);
        row++;
        col--;
      }
    }
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3, 4, 5],
    [-1, 6, 7, 11, 12],
    [13, -3, 4, 6, 13],
    [21, 13, 0, 3, 8]
  ];
  
  printDiagonalElementsReverse(matrix);
  // Output: 8
//   8
//   13
//   3
//   12
//   6
//   0
//   5
//   11
//   4
//   13
//   4
//   7
//   -3
//   21
//   3
//   6
//   13
//   2
//   -1
//   1
  