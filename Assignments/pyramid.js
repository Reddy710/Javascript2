// let count =1;
// let N=5
// for(let i=0;i<N;i++){
//     let no_of_spaces= N-i;
//     let pattern='';
//     let spaces=' '.repeat(no_of_spaces);
//     for(let j=0;j<count;j++){
//         pattern +='*';
//     }
//     console.log(spaces + pattern);
//     count +=2;
// }


// let N=5
// for(let i=0;i<=N;i++){
//     let no_of_spaces= N-i;
//     let pattern='';
//     let spaces=' '.repeat(no_of_spaces);
//     for(let j=0;j<2*i-1;j++){
//         pattern +='*';
//     }
//     console.log(spaces + pattern);
// }


// function generateReversePyramid(rows) {
//     for (let i = 0; i < rows; i++) {
//       let pattern = '';
//       for (let j = 0; j < i; j++) {
//         pattern += ' ';
//       }
//       for (let k = 0; k < 2 * (rows - i) - 1; k++) {
//         pattern += '*';
//       }
//       console.log(pattern);
//     }
//   }
  
//   const rows = 5; // Number of rows in the reverse pyramid
//   generateReversePyramid(rows);



  function generateDiamond(rows) {
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
  
    for (let i = rows - 2; i >= 0; i--) {
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
  const rows = 5; // Number of rows in the diamond
generateDiamond(rows);

  
  



// let a=3;
// let N=4;
// p = Math.pow(a,N)
// console.log(p)
