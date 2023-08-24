function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const transposedMatrix = new Array(cols);
    for (let i = 0; i < cols; i++) {
        transposedMatrix[i] = new Array(rows);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }

    return transposedMatrix;
}

// Example input
const input1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const input2 = [
    [1, 2],
    [1, 2],
    [1, 2]
];

// Transpose matrices
const output1 = transposeMatrix(input1);
console.log(output1);

const output2 = transposeMatrix(input2);
console.log(output2);
