// function generateAntiDiagonals(matrix) {
//     const n = matrix.length;
//     const result = new Array(2 * n - 1).fill().map(() => new Array(n).fill(0));

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             const antiDiagonalIndex = i + j;
//             result[antiDiagonalIndex][j] = matrix[i][j];
//         }
//     }

//     return result;
// }

// // Example usage
// const input1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// const output1 = generateAntiDiagonals(input1);
// console.log(output1);

// const input2 = [
//     [1, 2],
//     [3, 4]
// ];
// const output2 = generateAntiDiagonals(input2);
// console.log(output2);


// function generateAntiDiagonals(matrix) {
//     const n = matrix.length;
    
//     // Create the result array and initialize it with zeros
//     const result = new Array(2 * n - 1);
//     for (let i = 0; i < 2 * n - 1; i++) {
//         result[i] = new Array(n);
//         for (let j = 0; j < n; j++) {
//             result[i][j] = 0;
//         }
//     }

//     // Fill the result array with anti-diagonal values from the input matrix
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             const antiDiagonalIndex = i + j;
//             result[antiDiagonalIndex][j] = matrix[i][j];
//         }
//     }

//     return result;
// }

// // Example usage
// const input1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// const output1 = generateAntiDiagonals(input1);
// console.log(output1);

// const input2 = [
//     [1, 2],
//     [3, 4]
// ];
// const output2 = generateAntiDiagonals(input2);
// console.log(output2);


function generateAntiDiagonals(matrix) {
    const n = matrix.length;

    // Create the result array and initialize it with zeros
    const result = new Array(2 * n - 1);
    for (let i = 0; i < 2 * n - 1; i++) {
        result[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            result[i][j] = 0;
        }
    }

    // Fill the result array with anti-diagonal values from the input matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const antiDiagonalIndex = i + j;
            result[antiDiagonalIndex][j] = matrix[i][j];
        }
    }

    return result;
}

// Function to print a matrix with the desired formatting
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";
        for (let j = 0; j < matrix[i].length; j++) {
            // Use the width of 2 to align numbers to the right
            row += matrix[i][j].toString().padStart(2) + " ";
        }
        console.log(row);
    }
}

// Example usage
const input1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const output1 = generateAntiDiagonals(input1);
printMatrix(output1);

const input2 = [
    [1, 2],
    [3, 4]
];
const output2 = generateAntiDiagonals(input2);
printMatrix(output2);


