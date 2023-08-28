// function subarrayWithLeastAvg(A,k){
//     let min_Avg= Number.MAX_VALUE;
//     for (let i = 0;i<A.length;i++){
//         let sum =0;
//         for(let j = i;j<k;j++){
            
//             sum +=A[j];
//             Avg = sum/k;
//         }
//         if (Avg < min_Avg){
//             min_Avg = Avg;
//         }
//     }console.log(min_Avg);

// }const A=[3, 7, 90, 20, 10, 50, 40];
// const k=3;
// const result = subarrayWithLeastAvg(A,k)

function subarrayWithLeastAvg(A, k) {
    let min_Avg = Number.MAX_VALUE;
    let startIndex = 0;

    for (let i = 0; i <= A.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += A[j];
        }
        let Avg = sum / k;
        if (Avg < min_Avg) {
            min_Avg = Avg;
            startIndex = i;
        }
    }

    return startIndex;
}

const A = [3, 7, 90, 20, 10, 50, 40];
const k = 3;
const result = subarrayWithLeastAvg(A, k);
console.log(result); // Output: 3


