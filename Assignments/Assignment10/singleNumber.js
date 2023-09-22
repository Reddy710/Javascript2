// function findSingleNumber(A) {
//   let result = 0;
//   for (let i = 0; i < A.length; i++) {
//     result ^= A[i];
//   }
//   return result;
// }

// // Test cases
// console.log(findSingleNumber([1, 2, 2, 3, 1, 2, 2, 8])); // Output: 3, 8
// console.log(findSingleNumber([1, 2, 2, 4, 4, 6]));      // Output: 1, 6


function findSingleNumbers(A) {
  const frequencyMap = {};
  const repeatedElements = [];

  for (const num of A) {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  }

  for (const num in frequencyMap) {
    if (frequencyMap[num] === 1) {
      repeatedElements.push({
        value: parseInt(num),
        frequency: frequencyMap[num]
      });
    }
  }
  return repeatedElements;
}

// Test cases
console.log(findSingleNumbers([1, 2, 2, 3, 1, 4, 2, 2, 8, 9])); // Output: [3, 8]
console.log(findSingleNumbers([1, 2, 2, 4, 4, 6, 5]));      // Output: [1, 6]

