function countSubarraysWithSumLessThanB(A, B) {
    let left = 0; // Left pointer of the window
    let right = 0; // Right pointer of the window
    let currentSum = 0; // Current sum of the elements in the window
    let subarrayCount = 0; // Count of subarrays with sum less than B
  
    // Iterate through the array with the right pointer
    while (right < A.length) {
      // Add the element at right pointer to the current sum
      currentSum += A[right];
  
      // Check if the current sum exceeds or equals B
      // If it does, move the left pointer to shrink the window
      while (currentSum >= B) {
        currentSum -= A[left];
        left++;
      }
  
      // All subarrays between left and right pointer will have a sum less than B
      // Add the count of such subarrays to the subarrayCount
      subarrayCount += right - left + 1;
  
      // Move the right pointer to expand the window
      right++;
    }
  
    return subarrayCount;
  }
  
  // Test cases
  console.log(countSubarraysWithSumLessThanB([2, 5, 6], 10)); // Output: 4
  console.log(countSubarraysWithSumLessThanB([1, 11, 2, 3, 15], 10)); // Output: 4
  
  

//  function countingSubarray(A,B){
//         let sum = 0;
//         let count =0;
//         for (let i=0;i<A.length;i++){
//             for(let j=i;j<A.length;j++){
//                 let subarraySum=0;
//                 for(let k=i;k<=j;k++){
//                 subarraySum +=A[k];
//             }
//             sum +=subarraySum;
//             if (sum > B){
//                 count++;
//             }
//         }  
//     }
//     return count;
//     }const A = [2, 5, 6];
//     const B = 10;
//     const result = countingSubarray(A,B);
//     console.log (result);
   
//     const A1= [1, 11, 2, 3, 15];
//     const B1= 10;
//     const result1 = countingSubarray(A1,B1);
//     console.log (result1);