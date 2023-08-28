printDiagonalReverse([[1,2,3],[4,5,6],[7,8,9]])
 
function printDiagonalReverse(arr){
    let s = 0;
    let e = arr.length-1
    while(e>=0){
        console.log(arr[s][e])
        s++
        e--
    }
}