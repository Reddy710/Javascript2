function reversePyramidPattern(rows){
    let pattern = '';
    for(let i = 0; i< rows; i++){
         pattern = '';
         for(let k = 0; k<=i; k++){
            pattern += '*';
        }
        // for(let j =0; j< 2*(rows - i) - 1 ; j++){
        //     pattern += "*";
        // }
    console.log(pattern);
    // return pattern;

}
}
let rows = 5;
let result = reversePyramidPattern(rows);
console.log(result)

