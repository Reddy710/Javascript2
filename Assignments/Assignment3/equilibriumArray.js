// function Cum_Arr(Arr) {
//     let CumArr = [];
//     let sum = 0;
//     let N = Arr.length;
  
//     for (let i = 0; i < N; i++) {
//       sum += Arr[i];
//       CumArr.push(sum);
//     }
    
  
//     for (let i = 0; i < N; i++) {
//       let LS = i > 0 ? CumArr[i - 1] : 0;
//       let RS = sum-CumArr[i]-Arr[i];
      
//       if (LS === RS) {
//         return i;
      
//       }
//     }
//     return -1;
//   }
  
//   const Arr1 = [-7, 1, 5, 2, -4, 3, 0];
//   console.log(Cum_Arr(Arr1))
  
//   const Arr2 = [1,2,3];
//   console.log(Cum_Arr(Arr2))




// Assignment 3:////Doubt need to correct this code
// problem 1

function equilibriumIndex(arr) {
    let n = arr.length;
    let cumArr = [];
    let totalSum = 0;
  
    // Calculate the cumulative array
    for (let i = 0; i < n; i++) {
      totalSum += arr[i];
      cumArr.push(totalSum);
    }
  
    for (let i = 0; i < n; i++) {
      let leftSum = i > 0 ? cumArr[i - 1] : 0;
      let rightSum = totalSum - cumArr[i] - arr[i];
  
      if (leftSum === rightSum) {
        return i;
      }
    }
  
    // No equilibrium index found
    return -1;
  }
  
  // Example usage:
  const arr1 = [-7, 1, 5, 2, -4, 3, 0];
  console.log(equilibriumIndex(arr1));  // Output: 3
  
  const arr2 = [1, 2, 3];
  console.log(equilibriumIndex(arr2));  // Output: -1