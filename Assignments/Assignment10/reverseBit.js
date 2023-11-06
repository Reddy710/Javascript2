function reverseBits(A) {
    let result = 0;
    
    for (let i = 0; i < 32; i++) {
        // Shift the result to the left to make room for the next bit.
        result <<= 1;
        
        // Check the rightmost bit of A (A & 1) and set it in the result.
        result |= (A & 1);
        
        // Right shift A to process the next bit.
        A >>= 1;
    }
    
    return result >>> 0; // Convert to unsigned 32-bit integer.
}

// Test cases
console.log(reverseBits(0)); // Output: 0
console.log(reverseBits(7)); // Output: 3221225472

const binaryString = "11100000000000000000000000000000";
const decimalValue = parseInt(binaryString, 2);

console.log(decimalValue); // Output: 3758096384

