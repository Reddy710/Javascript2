function hasSubarrayWithZeroSum(arr) {
    const sumMap = new Map();
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  
      if (sum === 0 || sumMap.has(sum)) {
        return true; // Zero sum or repeating sum found
      }
  
      sumMap.set(sum, true);
    }
  
    return false; // No subarray with zero sum found
  }
  
  // Example usage:
  const arr = [2, 2, 1, -3, 4, 3, 1, -2, -3, 2];
  const result = hasSubarrayWithZeroSum(arr);
  console.log(result); // Output: true
  