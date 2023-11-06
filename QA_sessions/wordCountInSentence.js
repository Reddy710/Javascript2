function frequencyOfWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(/\s+/);
  
    // Create an object to store the word frequencies
    const wordFrequency = {};
  
    // Loop through the words and count their frequencies
    for (const word of words) {
      // Remove punctuation and convert to lowercase
      const cleanedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
  
      if (cleanedWord) { // Check if the word is not empty after cleaning
        if (wordFrequency[cleanedWord]) {
          wordFrequency[cleanedWord]++;
        } else {
          wordFrequency[cleanedWord] = 1;
        }
      }
    }
  
    return wordFrequency;
  }
  
  const sentence = "This is a simple sentence. This is a test sentence.";
  const result = frequencyOfWords(sentence);
  console.log(result);
  