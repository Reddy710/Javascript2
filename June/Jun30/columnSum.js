findColumnSum([[1,-1,4,3], [2,6,-1,-2], [6,-1,0,3]])
 
function findColumnSum(arr){
    for(let i=0; i<arr[0].length; i++){
        let sum = 0
        for(let j=0; j<arr.length; j++){
            sum += arr[j][i]
        }
        console.log("Sum of each column :" + sum)
    }
}