// function addtionOfRemovedElements(){
//     let sum=0;
//     for (let i=0;i<=arr.length;i+=B-1){
//         sum += arr[i];
//     }
//     console.log(sum);
// }
// const arr=[5,-2,3,1,2];
// const B =3;
// addtionOfRemovedElements(arr,B)

function pickFromBothSides(A, B) {
    const length = A.length;
    let maxSum = -Infinity;
  
    for (let i = 0; i <= B; i++) {
      let leftSum = 0;
      for (let j = 0; j < i; j++) {
        leftSum += A[j];
      }
  
      let rightSum = 0;
      for (let k = length - 1; k >= length - (B - i); k--) {
        rightSum += A[k];
      }
  
      maxSum = Math.max(maxSum, leftSum + rightSum);
    }
  
    return maxSum;
  }
  
  // Example usage:
  const A = [5, -2, 3, 1, 2];
  const B = 3;
  const result = pickFromBothSides(A, B);
  console.log(result);


// const A = [5, -2, 3, 1, 2];
// const B = 3;
// const length = A.length;
// for (let i = 0; i <= B; i++) {
//     let leftSum = 0;
//     for (let j = 0; j < i; j++) {
//       leftSum += A[j];
//     }
//     console.log(leftSum);
//     let rightSum = 0;
//     for (let k = length - 1; k >= length - (B - i); k--) {
//         rightSum += A[k];
//       }
//       console.log(rightSum);
// }





