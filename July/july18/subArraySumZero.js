function subArraySumZero(A){
    const cumArr=[];
    let sum = 0;
    for (let i=0;i<A.length;i++){
        sum += A[i];
        cumArr.push(sum)
    }
    console.log (cumArr);
    const hashMap={};
    for (let i=0;i<cumArr.length;i++){
        const key=cumArr[i];
        const value=i;
        hashMap[key]=value;
    }console.log(hashMap);
    if(hashMap.length != cumArr.length || hashMap[0]){
        return true;
    }

}const A = [2, 2, 1, -3, 4, 3, 1, -2, -3, 2];
const result =subArraySumZero(A);
console.log(result); // Output: true
