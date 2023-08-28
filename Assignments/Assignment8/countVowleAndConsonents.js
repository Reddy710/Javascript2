function isVowel(char) {
    return 'aeiouAEIOU'.indexOf(char) !== -1;
  }
  
  function isAlphabet(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
  }
  
  function countVowelsAndConsonants(str) {
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (const char of str) {
      if (isAlphabet(char)) {
        if (isVowel(char)) {
          vowelCount++;
        } else {
          consonantCount++;
        }
      }
    }
  
    return { vowels: vowelCount, consonants: consonantCount };
  }
  
  const inputString = "Hello, World!";
  const result = countVowelsAndConsonants(inputString);
  
  console.log("Vowels:", result.vowels);
  console.log("Consonants:", result.consonants);
  