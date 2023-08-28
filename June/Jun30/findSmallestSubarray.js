function findSmallestSubarrayWithMaxMin(arr) {
    let minIndex = -1;
    let maxIndex = -1;
  
    for (let i = 0; i < arr.length; i++) {
      if (minIndex === -1 || arr[i] < arr[minIndex]) {
        minIndex = i;
      }
  
      if (maxIndex === -1 || arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
  
    if (minIndex === -1 || maxIndex === -1) {
      return []; // No subarray found
    }
  
    let start = minIndex;
    let end = maxIndex;
  
    for (let i = maxIndex + 1; i < arr.length; i++) {
      if (arr[i] > arr[maxIndex]) {
        end = i;
      }
    }
  
    for (let i = minIndex - 1; i >= 0; i--) {
      if (arr[i] < arr[minIndex]) {
        start = i;
      }
    }
  
    return arr.slice(start, end + 1);
  }
  
  // Example usage:
  const arr = [1, 6, 4, 6, 5, 1, 2, 6, 4, 4, 2, 1];
  const result = findSmallestSubarrayWithMaxMin(arr);
  console.log(result); // Output: [ 1, 6 ]