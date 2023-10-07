function countSetBits(A) {
    let count = 0;
    
    while (A > 0) {
        // Check if the least significant bit is 1
        if (A & 1) {
            count++;
        }
        
        // Right shift A to check the next bit
        A >>= 1;
    }
    
    return count;
}

// Test cases
console.log(countSetBits(11)); // Output: 3
console.log(countSetBits(6));  // Output: 2
console.log(countSetBits(7));  // Output: 3
