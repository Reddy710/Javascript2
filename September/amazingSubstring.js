function printAmazingSubstrings(S) {
   const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
   let substrings = [];

   for (let i = 0; i < S.length; i++) {
       if (vowels.has(S[i])) {
           let subString = '';
           for (let j = i; j < S.length; j++) {
               subString += S[j];
               substrings.push(subString);
           }
       }
   }

   return substrings;
}

const inputString = "Amazing";
const result = printAmazingSubstrings(inputString);
console.log(result);