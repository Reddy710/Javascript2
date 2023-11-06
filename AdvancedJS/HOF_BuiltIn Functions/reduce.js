let arr = [3, 2, 3, 4, 5]
// let sum = 0;
// for(let i =0; i<arr.length; i++){
//     sum += arrr[i];
// }
// console.log(sum)

let totalSum = arr.reduce(
    function (sum, num)
    {
        sum = sum + num
        return sum
    }, -1
)
console.log(totalSum)