// let a = 5; // Binary: 0101
// let b = 3; // Binary: 0011

// let andResult = a & b; // Bitwise AND: 0001 (Decimal: 1)
// let orResult = a | b;  // Bitwise OR:  0111 (Decimal: 7)
// let xorResult = a ^ b; // Bitwise XOR: 0110 (Decimal: 6)

// let num = 8; // Binary: 1000

// let leftShift = num << 2; // Left Shift by 2: Binary 0010 (Decimal: 32)
// let rightShift = num >> 1; // Right Shift by 1: Binary 0100 (Decimal: 4)


let value = 12; // Binary: 1100

// Set the 2nd bit (from the right) to 1
value |= (1 << 2); // Binary: 1110 (Decimal: 14)

// Clear the 3rd bit (from the right) to 0
value &= ~(1 << 3); // Binary: 1010 (Decimal: 10)


let num1  = 7;

if (num1 & 1) {
    console.log("Number is odd");
} else {
    console.log("Number is even");
}


let a = 5;
let b = 3;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("a: " + a); // 3
console.log("b: " + b); // 5


function countSetBits(num) {
    let count = 0;
    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }
    return count;
}

let num = 23; // Binary: 10111
let result = countSetBits(num); // Result: 4
