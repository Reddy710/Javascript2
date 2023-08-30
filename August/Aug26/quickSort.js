function quickSort(arr,s,e){
    let p1 = s+1;
    let p2 = e;
    while(p1<=p2) {
        if(arr[p1]<=arr[0]) {
            p1++;
        }else if(arr[p2]>arr[0]) {
            p2--
        }else {
            let temp = arr[p1];
            arr[p1] = arr[p2];
            arr[p2] = temp;
        }
    }
    let temp = arr[0];
    arr[0] = arr[p2];
    arr[p2] = temp;
    return arr;
   
} 
const arr = [14,6,8,18,1,19,17,11,20,10,33,29];
let s = 1;
let e = arr.length-1;
const result =quickSort(arr,s,e);
console.log(result);