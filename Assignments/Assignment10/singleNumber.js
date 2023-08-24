function findSingleNumber(A) {
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result ^= A[i];
  }
  return result;
}

// Test cases
console.log(findSingleNumber([1, 2, 2, 3, 1])); // Output: 3
console.log(findSingleNumber([1, 2, 2]));      // Output: 1
