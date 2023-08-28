function matrixMultiplication(A, B) {
    const M = A.length;
    const N = A[0].length;
    const P = B[0].length;
    const MM = [];

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < P; j++) {
            let sum = 0;
            for (let k = 0; k < N; k++) {
                sum += A[i][k] * B[k][j];
            }
            MM.push(sum);
        }
    }

    return MM;
}

// Example input
const input1_A = [
    [1, 2],
    [3, 4]
];
const input1_B = [
    [5, 6],
    [7, 8]
];

const input2_A = [
    [1, 1]
];
const input2_B = [
    [2],
    [3]
];

// Calculate matrix multiplication
const output1 = matrixMultiplication(input1_A, input1_B);
console.log(output1);

const output2 = matrixMultiplication(input2_A, input2_B);
console.log(output2);
