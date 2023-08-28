// function generateDiamond(rows) {
//     for (let i = 0; i < rows; i++) {
//       let pattern = '';
//       for (let j = 0; j < rows - i - 1; j++) {
//         pattern += ' ';
//       }
//       for (let k = 0; k < 2 * i + 1; k++) {
//         pattern += '*';
//       }
//       console.log(pattern);
//     }
  
//     for (let i = rows - 2; i >= 0; i--) {
//       let pattern = '';
//       for (let j = 0; j < rows - i - 1; j++) {
//         pattern += ' ';
//       }
//       for (let k = 0; k < 2 * i + 1; k++) {
//         pattern += '*';
//       }
//       console.log(pattern);
//     }
//   }
//   const rows = 9; // Number of rows in the diamond
//   const result = generateDiamond(rows);

function generateDiamond(rows) {
  const totalRows = 2 * rows - 1;

  for (let i = 0; i < totalRows; i++) {
    let pattern = '';
    const spaces = Math.abs(rows - i - 1);
    const stars = totalRows - 2 * spaces;

    for (let j = 0; j < spaces; j++) {
      pattern += ' ';
    }
    for (let k = 0; k < stars; k++) {
      pattern += '*';
    }

    console.log(pattern);
  }
}

const rows = 9; // Number of rows in the diamond
generateDiamond(rows);



  