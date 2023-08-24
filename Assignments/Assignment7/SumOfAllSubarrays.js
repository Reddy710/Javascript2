// function sumOfAllSubarray(A){
//     let sum = 0;
//     for (let i=0;i<A.length;i++){
//         for(let j=i;j<A.length;j++){
//             let subarraySum=0;
//             for(let k=i;k<=j;k++){
//             subarraySum +=A[k];
//         }
//         sum +=subarraySum;
//     }  
// }
// console.log(sum);
// }
// const A=[1,2,3,4,-10];
// const result = sumOfAllSubarray(A);

// const A1=[-2,1,-3,4,-1,2,1,-5,4];
// const result1 = sumOfAllSubarray(A1);

// const A2 = [1, 2, 3];
// const result2 = sumOfAllSubarray(A2);


function sumOfAllSubarrays(A) {
    const N = A.length;
    let totalSum = 0;
  
    for (let i = 0; i < N; i++) {
      // Contribution of A[i] in subarrays
      totalSum += A[i] * (i + 1) * (N - i);
    }
  
    return totalSum;
  }
  
  // Test cases
  const A1 = [1, 2, 3];
  console.log(sumOfAllSubarrays(A1)); // Output: 20
  
  const A2 = [2, 1, 3];
  console.log(sumOfAllSubarrays(A2)); // Output: 19
  