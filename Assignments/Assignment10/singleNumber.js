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
  const singleElements = [];

  for (const num of A) {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  }

  for (const num in frequencyMap) {
    if (frequencyMap[num] === 1) {
      singleElements.push({
        value: parseInt(num),
        frequency: frequencyMap[num]
      });
    }
  }
  return singleElements;
}

// Test cases
console.log(findSingleNumbers([1, 2, 2, 3, 1, 4, 2, 2, 8, 9])); // Output: [3, 8]
console.log(findSingleNumbers([1, 2, 2, 4, 4, 6, 5]));      // Output: [1, 6]


// let arr=[1,2,3,1,3,2,4]
// let table={}
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i] in table)
//     {
//         table[arr[i]]+=1
//     }
//     else
//     {
//         table[arr[i]]=1

//     }
// }
// console.log(table)
// for(i in table)
// {
//     if(table[i]==1)
//     {
//         console.log(i)
//     }
// }

