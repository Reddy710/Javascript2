// 1. Generate * pattern to construct a pyramid
//     *
//    *** 
//   *****
//  *******
// *********

function pyramidPattern(rows){
    let pattern = '';
    for(let i = 0; i< rows; i++){
         pattern = '';
        for(let j =0; j<  rows -i - 1; j++){
            pattern += " ";
        }
        for(let k = 0; k< (2*i) + 1; k++){
            pattern += '*';
    }
    console.log(pattern);
    // return pattern;
}
}
let rows = 5;
let result = pyramidPattern(rows);
console.log(result)