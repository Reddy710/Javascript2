function countWordOccurrences(sentence, word) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
  
    // Initialize a variable to count occurrences
    let count = 0;
  
    // Iterate through the words and count occurrences of the given word
    for (const letter of words) {
      if (letter === word) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage
  const inputSentence = "This is a test sentence. This sentence is just a test.";
  const targetWord = "is";
  
  const occurrences = countWordOccurrences(inputSentence, targetWord);
  console.log(`The word "${targetWord}" appears ${occurrences} times in the sentence.`);
  