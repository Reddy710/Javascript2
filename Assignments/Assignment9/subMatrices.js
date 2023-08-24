
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "[ ";
        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j];
            if (j !== matrix[i].length - 1) {
                row += ", ";
            }
        }
        row += " ]";
        console.log(row);
    }
}

function subMatrices(A, B) {
    const rows = A.length;
    const cols = A[0].length;
    
    const result = [];
    for (let i = 0; i < rows; i++) {
        result.push([]);
        for (let j = 0; j < cols; j++) {
            result[i][j] = A[i][j] - B[i][j];
        }
    }
    
    return result;
}

// Example inputs
const A1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const B1 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

const A2 = [
    [1, 2, 3],
    [4, 1, 2],
    [7, 8, 9]
];

const B2 = [
    [9, 9, 7],
    [1, 2, 4],
    [4, 6, 3]
];

// Calculate and print the results
const result1 = subMatrices(A1, B1);
const result2 = subMatrices(A2, B2);

console.log("Result 1:");
printMatrix(result1);

console.log(""); // Adding an empty line for separation

console.log("Result 2:");
printMatrix(result2);
