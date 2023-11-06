function sum(N){
    if(N === 1){
    return 1;
    }
    return sum(N-1)+N;
}
let N = 100;
let result = sum(N);
console.log(result);

function fact(m){
    if(m === 0){
        return 1;
    }
    return fact(m-1) * m;
}
let m = 5;
let result1 = fact(m);
console.log(result1);

// function fibonacci(n) {
//     if (n <= 0) {
//         return []; // Handle the case where n is less than or equal to 0
//     } else if (n === 1) {
//         return [0]; // The Fibonacci sequence starts with 0 when n is 1
//     } else if (n === 2) {
//         return [0, 1]; // The Fibonacci sequence for n=2 includes 0 and 1
//     }

//     let sequence = [0, 1]; // Initialize the Fibonacci sequence with the first two values

//     for (let i = 2; i < n; i++) {
//         let newSum = sequence[i - 1] + sequence[i - 2];
//         sequence.push(newSum); // Add the new Fibonacci number to the sequence
//     }

//     return sequence; // Return the Fibonacci sequence as an array
// }

// let n = 10;
// let result2 = fibonacci(n);
// console.log(result2);


// function fibonacci(n){
//     let currSum = 1;
//     let prevSum = 1;
//     console.log(currSum);
//     console.log(prevSum);
//     for(let i=1; i <n; i++){
//         temp = currSum;
//         currSum +=prevSum;
//         console.log(currSum);
//         prevSum = temp;
//     }
// }
// let n = 10;
// let result2 = fibonacci(n);
// console.log(result2);


function fibonacci(n) {
    // if (n == 1 || n == 2) {
    //     return 1;
    // }
    if (n <= 1) {
        return n;
    }
        let t= fibonacci(n - 1) + fibonacci(n - 2);
        // console.log(t);
        return t;
}

let n = 5;
// fibonacci(n) 

for (let i = 1; i <= n; i++) {
    console.log(fibonacci(i));
}

