function findColumnWiseSums(matrix) {
    const columnSums = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for (let i = 0; i < cols; i++) {
      let sum = 0;
      for (let j = 0; j < rows; j++) {
        sum += matrix[j][i];
      }
  
      columnSums.push(sum);
    }
  
    return columnSums;
  }
  
  // Example usage:
  const matrix = [
    [1, -1, 4, 3],
    [2, 6, -1, -2],
    [6, -1, 0, 3]
  ];

  const matrix1 =[
        [1,2,3,4],
        [5,6,7,8],
        [9,2,3,4]
  ];
  
  const columnSums = findColumnWiseSums(matrix);
  console.log(columnSums); // Output: [7, 5, 8]

  const columnSums1 = findColumnWiseSums(matrix1);
  console.log(columnSums1); // Output: [7, 5, 8]

