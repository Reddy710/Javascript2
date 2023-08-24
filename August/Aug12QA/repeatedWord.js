function countWordOccurrences(sentence, word) {
    const words = sentence.split(' ');
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }

    return count;
}

// Example usage
const sentence = "This is a simple sentence This sentence is an example.";
const wordToCount = "sentence";
const occurrences = countWordOccurrences(sentence, wordToCount);

console.log(`The word "${wordToCount}" appears ${occurrences} times in the sentence.`);
