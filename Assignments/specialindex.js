// specialIndexFinder([4,3,2,7,6,-2])
 
// function specialIndexFinder(arr){
//     for(let i=0; i<arr.length; i++){
//         let newArr=[]
//         for(let j=0; j<arr.length;j++){
//             if(i != j){
//                 newArr.push(arr[j])
//             }
//         }
//         if(cummArray(newArr,0) == cummArray(newArr,1)){
//             console.log("Special index is : "+i)
//         }
//     }
// }
 
// function cummArray(arr, index){
//     let sum = 0
//     for(let i=index;i<arr.length;i=i+2){
//         sum += arr[i]
//     }
//     return sum
// }

// findingPairs(['a','d','g','a','g','a','g','f','g'])
 
// function findingPairs(arr){
//     let cg = 0
//     let cp = 0
//     for(let i=arr.length-1;i>=0;i--){
//         if(arr[i]=='g'){
//             cg++
//         }
//         if(arr[i]=='a'){
//             cp += cg
//         }
//     }
//     console.log(cp)
// }


// findingLeader([5,7,6,1,-1,0,5,2])
 
// function findingLeader(arr){
//     let leaderCount = 0
//     let max = Number.MIN_VALUE
//     for(let i=arr.length-1; i>=0; i--){
//         if(arr[i]>max){
//             max = arr[i]
//             leaderCount++
//         }
//     }
//     console.log(leaderCount)
// }


// smallestSubArrayWithMaxAndMin([1,2,3,1,3,4,6,4,6,3])
 
// function smallestSubArrayWithMaxAndMin(arr){
//     let min = Number.MAX_VALUE
//     let max = Number.MIN_VALUE
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//         if(arr[i]<min){
//             min = arr[i]
//         }
//     }
//     console.log(max)
//     console.log(min)
//     let isMin = false
//     let isMax = false
//     let v = -1
//     let smallestLength = Number.MAX_VALUE
//     for(let j=0; j<arr.length; j++){
//         if(arr[j]==min && !isMax){
//             isMin = true
//             v = j
//         }
//         if(arr[j]==max && !isMin){
//             isMax = true
//             v = j
//         }
//         if((arr[j] == max && isMin) || (arr[j] == min && isMax)){
//             if((j-v+1) < smallestLength){
//                 smallestLength = j-v+1
//             }
//             isMax = false
//             isMin = false
//         }
//     }
//     console.log(smallestLength)
// }

// for(let col=0; col<=ar.length;col++)
// {
// for(let row=0;row<=ar.length;row++)
// sum+=ar[row][col]
// }

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