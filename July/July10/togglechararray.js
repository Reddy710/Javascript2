// let v = "Bharath";
// let output = '';
// for (let i=0;i<v.length;i++){
//     if (v[i]>='A' && v[i]<='Z'){
//         output +=v[i]+32;
//     }
//     else{
//         output +=v[i]-32;
//     }
// }
// console.log(output);//output  : bHARATH


// let v = "Bharath";
// let output = '';
// for (let i = 0; i < v.length; i++) {
//   if (v[i] >= 'A' && v[i] <= 'Z') {
//     output += String.fromCharCode(v[i].charCodeAt(0) + 32); // Convert lowercase ASCII value to character
//   } else {
//     output += String.fromCharCode(v[i].charCodeAt(0) - 32); // Convert uppercase ASCII value to character
//   }
// }
// console.log(output); // Output: bHARATH



// let input = "Bharath";
// let output = '';

// for (let i = 0; i < input.length; i++) {
//   let currentChar = input[i];

//   // Check if the character is uppercase
//   if (currentChar >= 'A' && currentChar <= 'Z') {
//     // Convert uppercase to lowercase by adding 32 to the ASCII value
//     output += String.fromCharCode(currentChar.charCodeAt(0) + 32);
//   } else if (currentChar >= 'a' && currentChar <= 'z') {
//     // Convert lowercase to uppercase by subtracting 32 from the ASCII value
//     output += String.fromCharCode(currentChar.charCodeAt(0) - 32);
//   } else {
//     // Character is not a letter, so append it as it is
//     output += currentChar;
//   }
// }

// console.log(output); // Output: bHARATH


// function toggleCase(str) {
//     let output = '';
  
//     for (let i = 0; i < str.length; i++) {
//       let currentChar = str[i];
  
//       if (currentChar === currentChar.toUpperCase()) {
//         output += currentChar.toLowerCase();
//       } else {
//         output += currentChar.toUpperCase();
//       }
//     }
  
//     return output;
//   }
  
//   let input = "Bharath";
//   let output = toggleCase(input);
  
//   console.log(output); // Output: bHARATH


// let name = "OPQTech";
//    name[0]='s';
//    console.log(name);

// let name = ['O','P','Q','T','e','c','h'];
//    name[0]='s';
//    console.log(name);

let arr=['a','b','c','d','e','f'];
let s=2;
let e=5;
while(s<e){
    let temp= arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
    s++;
    e--;
}
console.log(arr); //[ 'a', 'b', 'f', 'e', 'd', 'c' ]
  


