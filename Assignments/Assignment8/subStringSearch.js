function substringSearch(mainString, pattern) {
    for (let i = 0; i <= mainString.length - pattern.length; i++) {
      let match = true;
  
      for (let j = 0; j < pattern.length; j++) {
        if (mainString[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
  
      if (match) {
        return i; // Pattern found at index i
      }
    }
  
    return -1; // Pattern not found
  }
  
  const mainString = "This is a test string for substring search.";
  const pattern = "test";
  
  const index = substringSearch(mainString, pattern);
  
  if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
  } else {
    console.log("Pattern not found.");
  }
  