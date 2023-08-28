function printBorderElements(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (i === 0 || i === numRows - 1 || j === 0 || j === numCols - 1) {
          console.log(matrix[i][j]);
        }
      }
    }
  }
  
  // Example usage:
  const matrix = [
    [5, 6, 7, 9],
    [0, -1, 7, 10],
    [1, 2, 3, 4],
    [7, -10, -3, 2]
  ];
  
  printBorderElements(matrix);
  // Output: 5
    // 5
    // 6
    // 7
    // 9
    // 0
    // 10
    // 1
    // 4
    // 7
    // -10
    // -3
    // 2