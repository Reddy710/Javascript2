function cummArray(arr, index){
    let sum = 0
    for(let i=index;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}const arr = [1,2,3,4,5,6];
    let index = 0;
    const result= cummArray(arr, index);
    console.log(result);