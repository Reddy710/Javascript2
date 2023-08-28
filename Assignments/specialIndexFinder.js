
function cummArray(arr, index){
    let sum = 0
    for(let i=index;i<arr.length;i=i+2){
        sum += arr[i]
    }
    return sum
}const arr = [1,2,3,4,5,6];
    let index = 1;
    const result= cummArray(arr, index);
    console.log(result);

specialIndexFinder([4,3,2,7,6,-2])
 
function specialIndexFinder(arr){
    for(let i=0; i<arr.length; i++){
        let newArr=[]
        for(let j=0; j<arr.length;j++){
            if(i != j){
                newArr.push(arr[j])
            }
        }
        if(cummArray(newArr,0) == cummArray(newArr,1)){
            console.log("Special index is : "+i)
        }
    }
}
 







