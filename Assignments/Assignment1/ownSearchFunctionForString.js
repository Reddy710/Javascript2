function searchString(searchStr, targetStr) {
    const searchLength = searchStr.length;
    const targetLength = targetStr.length;
  
    // Loop through the target string
    for (let i = 0; i <= targetLength - searchLength; i++) {
      let found = true;
  
      // Check each character of searchStr against targetStr
      for (let j = 0; j < searchLength; j++) {
        if (targetStr[i + j] !== searchStr[j]) {
          found = false;
          break;
        }
      }
  
      // If the search string is found, return the starting index
      if (found) {
        return i;
      }
    }
  
    // If the search string is not found, return -1
    return -1;
  }
  
  // Example usage:
  const targetString = "Hello, World!";
  const search = "World";
  const index = searchString(search, targetString);
  console.log(index); // Output: 7