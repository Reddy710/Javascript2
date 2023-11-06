let myarr = [1,2,3,4,5]

// function findSqure(myarr){
// let result =[]
// for(let i = 0; i<myarr.length; i++){
//     result.push(Math.pow(myarr[i],2))
// }
// return result;
// }
// let result = findSqure(myarr)
// console.log(result)

//map : It is the method used to do some operations with array elements and return a resulting array
function square(num)
{
    return num*num;
}
let result = myarr.map(square)
console.log(result)