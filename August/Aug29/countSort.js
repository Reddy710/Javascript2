function countingSort(arr) {
    if (arr.length <= 1) return arr;

    // Find the maximum element in the array
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Create a hashmap to store the frequency of each element
    let frequencyMap = {};
    for (let i = 0; i < arr.length; i++) {
        frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
    }

    // Create the output array
    let outputArray = new Array(arr.length);
    let index = 0;
    for (let num = 0; num <= max; num++) {
        if (frequencyMap[num]) {
            for (let count = 0; count < frequencyMap[num]; count++) {
                outputArray[index] = num;
                index++;
            }
        }
    }

    return outputArray;
}

const arr = [4, 2, 2, 8, 3, 3, 1];
const result = countingSort(arr);
console.log(result); // Output: [1, 2, 2, 3, 3, 4, 8]
