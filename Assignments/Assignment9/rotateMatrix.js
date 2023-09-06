function rotateMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Transpose the matrix
    const transposedMatrix = [];
    for (let j = 0; j < cols; j++) {
      const newRow = [];
      for (let i = 0; i < rows; i++) {
        newRow.push(matrix[i][j]);
      }
      transposedMatrix.push(newRow);
    }
    
    // Reverse the rows to get the final rotated matrix
    for (let i = 0; i < rows; i++) {
      transposedMatrix[i].reverse();
    }
    
    return transposedMatrix;
  }
  
  const arr1 = [
                [1, 2],
                [3, 4]
              ];
  const arr2 = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ];

  const result1 = rotateMatrix(arr1);
  console.log(result1);
  const result2 = rotateMatrix(arr2);
  console.log(result2);



            

   