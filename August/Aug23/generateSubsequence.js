function generateSubsequences(arr) {
    const n = arr.length;
    for(let i = 0; i < (Math.pow(2,n)); i++) {
        let subseque = [];
        for(let pos = 0; pos <= n; pos++) {
            if(checkBitSet(i, pos)){
                subseque.push(arr[pos]);
            }
            // console.log(subseque);
        }
        console.log(subseque);
    }

}

// Function to check if a specific bit is set in an integer
function checkBitSet(num, pos) {
    return (num & (1 << pos)) !== 0;
}

const arr = [1,2,3,4];
const result = generateSubsequences(arr);
console.log(result);


