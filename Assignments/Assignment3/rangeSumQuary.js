//   Problem2
function rangeSumQuery(A, B) {
    const result = [];
  
    for (let i = 0; i < B.length; i++) {
      const [L, R] = B[i];
      let sum = 0;
  
      for (let j = L; j <= R; j++) {
        sum += A[j];
      }
  
      result.push(sum);
    }
  
    return result;
  }
  
  // Example usage:
  const A = [1, 2, 3, 4, 5];
  const B = [[0, 3], [1, 2]];
  console.log(rangeSumQuery(A, B));  // Output: [10, 5]

