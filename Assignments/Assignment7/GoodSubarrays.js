function countGoodSubarrays(A, B) {
    let count = 0;
  
    // Function to check if the subarray is good
    function isGoodSubarray(subarray, isEven) {
      let sum = 0;
      for (let k = 0; k < subarray.length; k++) {
        sum += subarray[k];
      }
      return (isEven && sum < B) || (!isEven && sum > B);
    }
  
    // Loop through all possible subarrays
    for (let i = 0; i < A.length; i++) {
      for (let j = i; j < A.length; j++) {
        // Get the current subarray
        const subarray = [];
        for (let k = i; k <= j; k++) {
          subarray.push(A[k]);
        }
  
        // Check if the subarray length is even or odd
        const isEven = subarray.length % 2 === 0;
  
        // Check if the subarray is good
        if (isGoodSubarray(subarray, isEven)) {
          count++;
        }
      }
    }
  
    return count;
  }
  
  // Test cases
  console.log(countGoodSubarrays([1, 2, 3, 4, 5], 4)); // Output: 6
  console.log(countGoodSubarrays([13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9], 65)); // Output: 36
  