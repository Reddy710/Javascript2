// function countSpecialSubsequences(A) {
//     const mod = 1000000007;
//     let count = 0;
//     let prevCount = 0;
//     let result = 0;
  
//     for (let i = 0; i < A.length; i++) {
//       if (A[i] === 'A') {
//         count = (count + prevCount + 1) % mod;
//       } else if (A[i] === 'G') {
//         prevCount = count;
//         result = (result + prevCount) % mod;
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const A = "ABCGAG";
//   const result = countSpecialSubsequences(A);
//   console.log(result);
  
function countSpecialSubsequences(A) {
    const mod = 1000000007;
    let countAG = 0;
    let result = 0;
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] === 'A') {
        countAG = (countAG + 1) % mod;
      } else if (A[i] === 'G') {
        result = (result + countAG) % mod;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const A = "ABCGAG";
  const result = countSpecialSubsequences(A);
  console.log(result);
  