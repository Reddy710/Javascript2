function findRowWiseSum(matrix) {
    const rowSums = [];
  
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      let sum = 0;
  
      for (let j = 0; j < row.length; j++) {
        sum += row[j];
      }
  
      rowSums.push(sum);
    }
  
    return rowSums;
  }
  
  // Example usage:
  const matrix = [
    [1, -1, 4, 3],
    [2, 6, -1, -2],
    [6, -1, 0, 3]
  ];
  
  const rowSums = findRowWiseSum(matrix);
  console.log(rowSums); // Output: [7, 5, 8]