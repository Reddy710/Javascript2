// function reverseWordsOrder(sentence) {
//     // Split the sentence into words using space as a delimiter
//     const words = sentence.split(' ');
  
//     // Reverse the order of the words
//     const reversedSentence = words.reverse().join(' ');
  
//     return reversedSentence;
//   }
  
//   const inputSentence = "Hello World, How are you?";
//   const reversedSentence = reverseWordsOrder(inputSentence);
  
//   console.log(reversedSentence);


  function reverseWordsWithOrder(sentence) {
    // Split the sentence into words using space as a delimiter
    const words = sentence.split(' ');
  
    // Reverse the order of the words and reverse each word
    const reversedWords = words.map(word => word.split('').reverse().join(''));
  
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.reverse().join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = "Hello World, How are you?";
  const reversedSentence = reverseWordsWithOrder(inputSentence);
  
  console.log(reversedSentence);
  
  
  
  