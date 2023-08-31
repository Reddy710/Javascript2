// function insertionSort(arr) {
//     for(let i=1; i<arr.length;i++) {
//         let new_entry = a[i];
//         let j = i-1;
//         while (j >= 0 && arr[j] > new_entry) {
//             arr[j + 1] = arr[j];
//             j--;
//         }

//         arr[j + 1] = new_entry;
//     }
//     return arr;
// } 
// const arr =[1,2,3,4,5,7,8,10];
// const result = insertionSort(arr);
// console.log(result);


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

const arr = [4, 2, 8, 1, 6, 3];
const result = insertionSort(arr);
console.log(result); // Output: [1, 2, 3, 4, 6, 8]
