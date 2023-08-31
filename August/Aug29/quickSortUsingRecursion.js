function quickSort(arr, s, e) {
    if (s < e) {
        let pivotIndex = partition(arr, s, e);
        quickSort(arr, s, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, e);
    }
    return arr;
}

function partition(arr, s, e) {
    let pivot = arr[s];
    let p1 = s + 1;
    let p2 = e;
    while (p1 <= p2) {
        if (arr[p1] <= pivot) {
            p1++;
        } else if (arr[p2] > pivot) {
            p2--;
        } else {
            let temp = arr[p1];
            arr[p1] = arr[p2];
            arr[p2] = temp;
            p1++;
            p2--;
        }
    }
    let temp = arr[s];
    arr[s] = arr[p2];
    arr[p2] = temp;
    return p2;
}

const arr = [14, 6, 8, 18, 1, 19, 17, 11, 20, 10, 33, 29];
let s = 0; // Changed s to 0
let e = arr.length - 1;
const result = quickSort(arr, s, e);
console.log(result);