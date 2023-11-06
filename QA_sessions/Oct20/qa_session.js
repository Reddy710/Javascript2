// let sentence = "I am Bharath. I am from Bengaluru"


// const sentence = "I am Bharath. I am from Bengaluru";
// const regex = /\b\w+luru\b/g;  // Regular expression to match words ending with "luru"
// const matches = sentence.match(regex);

// if (matches) {
//   console.log(matches);
// } else {
//   console.log("No 'luru' phrase found in the sentence.");
// }

// const sentence = "I am Bharath. I am from Bengaluru";
// const regex = "from";  // Regular expression to match words ending with "luru"
// const matches = sentence.match(regex);

// if (matches) {
//   console.log(matches);
// } else {
//   console.log("No 'luru' phrase found in the sentence.");
// }

const sentence = "I am Bharath. I am from Bengaluru";

// Find the position of "Bharath" in the sentence
const startIndex = sentence.indexOf("Bharath");

if (startIndex !== -1) {
  // The starting index is found
  const length = "Bharath".length;
  const extractedPhrase = sentence.substring(startIndex, startIndex + length);
  console.log(extractedPhrase);
} else {
  console.log("Phrase not found in the sentence.");
}

// const sentence = "I am Bharath. I am from Bengaluru";
const searchWord = "enga";

const regex = new RegExp(`\\b${searchWord}\\w*`, 'g');
const matches = sentence.match(regex);

if (matches) {
  console.log(matches);
} else {
  console.log(`Part of '${searchWord}' not found in the sentence.`);
}








