function maxSumContiguousSubarray(A){
    let max = Number.MIN_VALUE;
    for (i=0;i<A.length;i++){
        let sum = 0; //this is used to make outer loop sum zero for every iteration
        for(j=i;j<A.length;j++){
            sum +=A[j];
            if (sum>max){
                max = sum;
            }
        }
    }console.log(max);
}
const A=[1,2,3,4,-10];
const result = maxSumContiguousSubarray(A);

const A1=[-2,1,-3,4,-1,2,1,-5,4];
const result1 = maxSumContiguousSubarray(A1);

//Optimized solution for above code

// function maxSumContiguousSubarray(A) {
//     let maxEndingHere = A[0];
//     let maxSoFar = A[0];
  
//     for (let i = 1; i < A.length; i++) {
//       maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
//       maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }
  
//     return maxSoFar;
//   }
  
//   // Test cases
//   const A = [1, 2, 3, 4, -10];
//   console.log(maxSumContiguousSubarray(A)); // Output: 10
  
//   const A1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//   console.log(maxSumContiguousSubarray(A1)); // Output: 6
  


