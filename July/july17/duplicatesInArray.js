function hasDuplicates(arr) {
    const frequencyMap = new Map();
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
  
      if (frequencyMap.has(element)) {
        return true; // Duplicate found
      }
  
      frequencyMap.set(element, true);
    }
  
    return false; // No duplicates found
  }
  
  // Example usage:
  const arr = [2, 3, 4, 2, 3, 5, 5, 4, 6, 7];
  const result = hasDuplicates(arr);
  console.log(result); // Output: true
  