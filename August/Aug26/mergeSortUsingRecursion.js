function mergeSort(arr,s,e) {
    if(s==e)
    return;
let m = (s+e)/2;
mergeSort(arr,s,m)
mergeSort(arr,m+1,e)
mergeSortedSubarray(arr,s,m,e)
}
const arr = [4,8,-1,2,6,9,11,3,4,7,13,0];
let s = 2;
let e = 9;
let result = mergeSort(arr,s,e);
// console.log(result);