// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSubarraySum(arr){
    let max = Number.MIN_VALUE;
    
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length; j++){
             sum += arr[j];
             if(max < sum){
                max = sum;
             }
        }
        }
        return max;
}
const arr = [-2,1,-3,4,-1,2,1,-5,4]
const result = maxSubarraySum(arr)
console.log(result)