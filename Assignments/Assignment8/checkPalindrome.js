function isPalindrome(input) {
    // Convert input to string format
    const strInput = String(input);
  
    // Initialize pointers for comparison
    let left = 0;
    let right = strInput.length - 1;
  
    // Iterate while pointers haven't crossed each other
    while (left < right) {
      // Compare characters at left and right pointers
      if (strInput.charAt(left) !== strInput.charAt(right)) {
        return false; // Characters are not equal, not a palindrome
      }
  
      // Move pointers towards each other
      left++;
      right--;
    }
  
    // If the loop completes without returning false, it's a palindrome
    return true;
  }
  
  // Test cases
  console.log(isPalindrome("racecar"));       // true
  console.log(isPalindrome("A man a plan")); // true
  console.log(isPalindrome(12321));          // true
  console.log(isPalindrome("hello"));        // false
  