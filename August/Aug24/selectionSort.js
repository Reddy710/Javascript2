function selectionSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n-1; i++) {
        let min = Number.MAX_VALUE;
        let minpos = -1;
        for(let j = i; j < n-1; j++) {
            if(arr[j] < min) {
                min = arr[j];
                minpos = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minpos];
        arr[minpos] = temp;    
    }
    return arr;
}let arr = [1,3,5,-1,-5,6,2,11];
const result = selectionSort(arr);
console.log(result);

