// function amazingSubArray(String){
//     let temp = [];
//     for (let i = 0; i< String.length; i++){
//         for (let j=0;j<String.length;j++){
//             if(String[i] === 'a','e','i','o','u','A','E','I','O','U'){
//                 temp.push(String[i]);
//             }else{
//                 continue;
//             }
            
//         }
//     }
//     console.log(temp);
// } String = 'ABEC'
// const result=amazingSubArray(String);

// function countAmazingSubstrings(S) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//     const MOD = 10003;
//     let count = 0;
//     const substrings = [];
  
//     for (let i = 0; i < S.length; i++) {
//       if (vowels.has(S[i])) {
//         // Number of substrings starting with S[i] = length of the string - index of S[i]
//         count = (count + S.length - i) % MOD;
  
//         // Add the substrings starting with S[i] to the array
//         for (let j = i + 1; j <= S.length; j++) {
//           const substring = S.slice(i, j);
//           substrings.push(substring);
//         }
//       }
//     }
  
//     return { count, substrings };
//   }
  
//   // Example usage:
//   const inputString = "ABEC";
//   const { count, substrings } = countAmazingSubstrings(inputString);
  
//   console.log("Count:", count); // Output: 6
//   console.log("Substrings:", substrings);


  function countAmazingSubstrings(S) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const MOD = 10003;
    let count = 0;
  
    for (let i = 0; i < S.length; i++) {
      if (vowels.has(S[i])) {
        // Number of substrings starting with S[i] = length of the string - index of S[i]
        count = (count + S.length - i) % MOD;
        console.log(count);
      }
    }
  
    return count;
  }
  
  // Example usage:
  const inputString = "ABECURIKO";
  const result = countAmazingSubstrings(inputString);
  console.log(result); // Output: 6
  
  