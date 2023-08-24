// function Cum_Arr(){
//     let CumArr=[];
//     let sum=0;
//     for(let i=0;i<Arr.length;i++){
//         sum +=Arr[i];
//         CumArr.push(sum);
//     }
// console.log(CumArr);
// let N=CumArr.length;
//    for(let j=0;j<N;j++)
//     {
//     let LS= CumArr[j-1];
//     let RS= CumArr[N-1]-CumArr[j];
//     if(LS===RS)
//     console.log('Equilibrium')
//     else
//     return -1;
// }
// }
// const Arr=[-7,1,5,2,-4,3,0];
// Cum_Arr(Arr)
// ================



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


// Assignment 3:////Doubt
// problem 1

// function equilibriumIndex(arr) {
//     let n = arr.length;
//     let cumArr = [];
//     let totalSum = 0;
  
//     // Calculate the cumulative array
//     for (let i = 0; i < n; i++) {
//       totalSum += arr[i];
//       cumArr.push(totalSum);
//     }
  
//     for (let i = 0; i < n; i++) {
//       let leftSum = i > 0 ? cumArr[i - 1] : 0;
//       let rightSum = totalSum - cumArr[i] - arr[i];
  
//       if (leftSum === rightSum) {
//         return i;
//       }
//     }
  
//     // No equilibrium index found
//     return -1;
//   }
  
//   // Example usage:
//   const arr1 = [-7, 1, 5, 2, -4, 3, 0];
//   console.log(equilibriumIndex(arr1));  // Output: 3
  
//   const arr2 = [1, 2, 3];
//   console.log(equilibriumIndex(arr2));  // Output: -1



//   Problem2
// function rangeSumQuery(A, B) {
//     const result = [];
  
//     for (let i = 0; i < B.length; i++) {
//       const [L, R] = B[i];
//       let sum = 0;
  
//       for (let j = L; j <= R; j++) {
//         sum += A[j];
//       }
  
//       result.push(sum);
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const A = [1, 2, 3, 4, 5];
//   const B = [[0, 3], [1, 2]];
//   console.log(rangeSumQuery(A, B));  // Output: [10, 5]


  // // Problem 3
  // function getMaxValue(arr) {
  //   let maxVal = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] > maxVal) {
  //       maxVal = arr[i];
  //     }
  //   }
  //   return maxVal;
  // }
  
  // function timeToEquality(arr) {
  //   const maxVal = getMaxValue(arr);
  //   let totalTime = 0;
  
  //   for (let i = 0; i < arr.length; i++) {
  //     totalTime += maxVal - arr[i];
  //   }
  
  //   return totalTime;
  // }
  
  // // Example usage:
  // const A = [2, 4, 1, 3, 2];
  // console.log(timeToEquality(A)); // Output: 8


// Problem 4
  // function productArray(A) {
  //   const n = A.length;
  //   const prefix = new Array(n).fill(1);
  //   const suffix = new Array(n).fill(1);
  //   const product = new Array(n);
  
  //   // Calculate prefix product
  //   for (let i = 1; i < n; i++) {
  //     prefix[i] = prefix[i - 1] * A[i - 1];
  //   }
  
  //   // Calculate suffix product
  //   for (let i = n - 2; i >= 0; i--) {
  //     suffix[i] = suffix[i + 1] * A[i + 1];
  //   }
  
  //   // Calculate product array
  //   for (let i = 0; i < n; i++) {
  //     product[i] = prefix[i] * suffix[i];
  //   }
  
  //   return product;
  // }
  
  // // Example usage:
  // const A = [1, 2, 3, 4, 5];
  // console.log(productArray(A)); // Output: [120, 60, 40, 30, 24]
  
  // const B = [5, 1, 10, 1];
  // console.log(productArray(B)); // Output: [10, 50, 5, 50]
  



  function productArray(A) {
    const n = A.length;
    const product = [];
  
    for (let i = 0; i < n; i++) {
      let currProduct = 1;
      for (let j = 0; j < n; j++) {
        if (j !== i) {
          currProduct *= A[j];
        }
      }
      product.push(currProduct);
    }
  
    return product;
  }
  
  // Example usage:
  const A = [1, 2, 3, 4, 5];
  console.log(productArray(A)); // Output: [120, 60, 40, 30, 24]
  
  const B = [5, 1, 10, 1];
  console.log(productArray(B)); // Output: [10, 50, 5, 50]
  
  
  
  