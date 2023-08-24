// A = "100";
// B = "11";
// sum = A + B ;
// console.log(sum);

function addBinaryStrings(A, B) {
    let result = '';
    let carry = 0;
    let i = A.length - 1;
    let j = B.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digitA = i >= 0 ? parseInt(A.charAt(i)) : 0;
      const digitB = j >= 0 ? parseInt(B.charAt(j)) : 0;
  
      const sum = digitA + digitB + carry;
      const currentDigit = sum % 2;
      carry = Math.floor(sum / 2);
  
      result = currentDigit + result;
  
      i--;
      j--;
    }
  
    return result;
  }
  
  // Test cases
  console.log(addBinaryStrings("100", "11")); // Output: "111"
  console.log(addBinaryStrings("110", "10")); // Output: "1000"
  