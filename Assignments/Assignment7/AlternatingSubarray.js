function alternatingSubarrays(A, B) {
    const isAlternatingSubarray = (subarray) => {
      for (let i = 0; i < subarray.length - 1; i++) {
        if (subarray[i] === subarray[i + 1]) {
          return false;
        }
      }
      return true;
    };
  
    const result = [];
    const n = A.length;
    for (let i = 0; i < n; i++) {
      let left = Math.max(0, i - B);
      let right = Math.min(n - 1, i + B);
      let subarray = A.slice(left, right + 1);
      if (isAlternatingSubarray(subarray)) {
        result.push(i);
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(alternatingSubarrays([1, 0, 1, 0, 1], 1)); // Output: [1, 2, 3]
  console.log(alternatingSubarrays([0, 0, 0, 1, 1, 0, 1], 0)); // Output: [0, 1, 2, 3, 4, 5, 6]

// function alternatingSubarrays(A, B) {
//     const isAlternatingSubarray = (subarray) => {
//       if (subarray.length <= 1) {
//         return false;
//       }
//       for (let i = 0; i < subarray.length - 1; i++) {
//         if (subarray[i] === subarray[i + 1]) {
//           return false;
//         }
//       }
//       return true;
//     };
  
//     const result = [];
//     const n = A.length;
//     for (let i = 0; i < n; i++) {
//       let left = Math.max(0, i - B);
//       let right = Math.min(n - 1, i + B);
//       let subarray = A.slice(left, right + 1);
//       if (isAlternatingSubarray(subarray)) {
//         result.push(i);
//       }
//     }
  
//     return result;
//   }
  
//   // Test cases
//   console.log(alternatingSubarrays([1, 0, 1, 0, 1], 1)); // Output: [1, 2, 3]
//   console.log(alternatingSubarrays([0, 0, 0, 1, 1, 0, 1], 0)); // Output: [0, 1, 2, 3, 4]
  
  