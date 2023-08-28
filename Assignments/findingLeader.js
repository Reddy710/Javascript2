
findingLeader([5,7,6,1,-1,0,5,2])
 
function findingLeader(arr){
    let leaderCount = 0
    let max = Number.MIN_VALUE
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]>max){
            max = arr[i]
            leaderCount++
        }
    }
    console.log(leaderCount)
}