function printDiagonalElements(matrix) {
    const n = matrix.length;
  
    for (let i = 0; i < n; i++) {
      console.log(matrix[i][i]);
    }
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  printDiagonalElements(matrix);
  // Output: 1
  //         5
  //         9