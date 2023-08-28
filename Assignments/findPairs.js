findingPairs(['a','d','g','a','g','a','g','f','g'])
 
function findingPairs(arr){
    let cg = 0
    let cp = 0
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]=='g'){
            cg++
        }
        if(arr[i]=='a'){
            cp += cg
        }
    }
    console.log(cp)
}