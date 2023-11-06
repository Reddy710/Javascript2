function pattern(rows){
for(let i=0; i<rows; i++){
    let pattern = '';
for(let j=0; j<i; j++){
    pattern +=' ';
}
for(let k = 0; k<2*(rows-i)-1; k++){
    pattern +='*'
}
// console.log(pattern);
console.log(pattern);
}

}

const rows = 5;
pattern(rows);
