// function leaderInAnArray(A){
//     let temp=[];
//     for(i=0;i<=A.length;i++){
//         for(j=i+1;j<=A.length;j++){
//             if(A[j]>A[i]){
//                 temp.push(A[j]);
//             }
//         }
            
//     }console.log(temp)
// }
    
// const A = [16, 17, 4, 3, 5, 2];
// const result = leaderInAnArray(A);

// const A1 = [5, 4];
// const result1 = leaderInAnArray(A1);


function findLeaders(A) {
    const leaders = [];
    let maxRight = A[A.length - 1];
    leaders.push(maxRight);
  
    for (let i = A.length - 2; i >= 0; i--) {
      if (A[i] > maxRight) {
        maxRight = A[i];
        leaders.push(maxRight);
      }
    }
  
    return leaders.reverse();
  }
  
  // Example usage:
  const inputArray1 = [16, 17, 4, 3, 5, 2];
  const inputArray2 = [5, 4];
  
  console.log(findLeaders(inputArray1)); // Output: [17, 5, 2]
  console.log(findLeaders(inputArray2)); // Output: [5, 4]
  
  
