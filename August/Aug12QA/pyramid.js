function generatePiramid(rows) {
    for (let i = 0; i < rows; i++) {
      let pattern = '';
      for (let j = 0; j < rows - i - 1; j++) {
        pattern += ' ';
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        pattern += '*';
      }
      console.log(pattern);
    }
}
const rows = 5;
const result = generatePiramid(rows);