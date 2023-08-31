// function binarySearch(arr, k) {

//     if (k<arr[0] || k > arr[arr.length-1]) {
//     return -1
//     }

//     let s = 0;
//     let e = arr.length-1;
//     while(s<=e) {
//     let mid = (e+s) / 2;
//     if(k == arr[mid]) {
//     return mid;
//     } 
//     else if(k > arr[mid]) {
//     s = mid + 1;
//     } else {
//     e = mid - 1;
//     }
//     if(arr[s] || arr[e] === k){
//         return true;
//     }
//     }
//     }
    

//     const arr = [3,6,9,12,14,19,20,23,25,27];
//     const k = 27;
//     const result = binarySearch(arr, k);
//     console.log(result);


function binarySearch(arr, k) {
    if (k < arr[0] || k > arr[arr.length - 1]) {
        return -1;
    }

    let s = 0;
    let e = arr.length - 1;
    while (s <= e) {
        let mid = Math.floor((e + s) / 2);
        if (k == arr[mid]) {
            return mid;
        } else if (k > arr[mid]) {
            s = mid + 1;
        } else {
            e = mid - 1;
        }
    }
    
    return -1;
}

const arr = [3, 6, 9, 12, 14, 19, 20, 23, 25, 27];
const k = 30;
const resultIndex = binarySearch(arr, k);

if (resultIndex !== -1) {
    console.log(`Element ${k} found at index ${resultIndex}`);
} else {
    console.log(`Element ${k} not found in the array`);
}
