 // // Problem 3
  function getMaxValue(arr) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxVal = arr[i];
      }
    }
    return maxVal;
  }
  
  function timeToEquality(arr) {
    const maxVal = getMaxValue(arr);
    let totalTime = 0;
  
    for (let i = 0; i < arr.length; i++) {
      totalTime += maxVal - arr[i];
    }
  
    return totalTime;
  }
  
  // Example usage:
  const A = [2, 4, 1, 3, 2];
  console.log(timeToEquality(A)); // Output: 8