// function sumOfAllSubarray(A){
//         let sum = 0;
//         for (let i=0;i<A.length;i++){
//             for(let j=i;j<A.length;j++){
//                 let subarraySum=0;
//                 for(let k=i;k<=j;k++){
//                 subarraySum +=A[k];
//             }
//             sum +=subarraySum;
//             if (sum === B)
//             return B;
//             else 
//             return 0;
//         }  
//     }
    
//     }
//     const A=[1,2,3,4,-10];
//     B = 7;
//     const result = sumOfAllSubarray(A,B);
//     console.log(result);
    
//     const A1=[-2,1,-3,4,-1,2,1,-5,4];
//     B1 = 7;
//     const result1 = sumOfAllSubarray(A1,B1);
//     console.log(result1);
    
//     const A2 = [1, 2, 3];
//     B2 = 7;
//     const result2 = sumOfAllSubarray(A2,B2);
//     console.log(result2);

function maximumSumSubarray(A, B, C) {
    let windowStart = 0; // Starting index of the window
    let currentSum = 0; // Sum of elements in the current window
    let maxSum = 0; // Maximum sum encountered within the limit B

    for (let windowEnd = 0; windowEnd < A; windowEnd++) {
        // Add the current element to the window sum
        currentSum += C[windowEnd];

        // Shrink the window from the left until the sum is within the limit
        while (currentSum > B) {
            currentSum -= C[windowStart];
            windowStart++;
        }

        // Update the maximum sum if necessary
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example 1
const A1 = 5;
const B1 = 12;
const C1 = [2, 1, 3, 4, 5,6,9];
console.log(maximumSumSubarray(A1, B1, C1)); // Output: 12

// Example 2
const A2 = 3;
const B2 = 1;
const C2 = [2, 2, 2, 1];
console.log(maximumSumSubarray(A2, B2, C2)); // Output: 0
