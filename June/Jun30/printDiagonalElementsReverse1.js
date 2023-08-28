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