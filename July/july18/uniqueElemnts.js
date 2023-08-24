// function numberOfUniqueElements(A,K){
//     let N=A.length;
//     for(let i = 0; i<=N-K; i++){
//         let HM={};
//         for(let j = i; j< i+K; j++){
//             let key = A[j];
//             if (HM.hasOwnProperty(key)) {
//                 // If the key already exists, update the value
//                 HM[key]+=1;

//               } else {
//                 // If the key doesn't exist, add it with an initial value of 1
//                 HM[key] = 1;
//               }
//         }
//         const length = Object.keys(HM).length;
//         console.log("Length of the HashMap:", length);
//     }
    
// }const A = [2,4,3,8,9,4,9,4,10];
// const K = 4;
// const result = numberOfUniqueElements(A,K);

function numberOfUniqueElements(A, K) {
    const N = A.length;
    const HM = {};
  
    // First K elements
    for (let i = 0; i < K; i++) {
      let key = A[i];
      if (HM.hasOwnProperty(key)) {
        HM[key] += 1;
      } else {
        HM[key] = 1;
      }
    }
  
    const length = Object.keys(HM).length;
    console.log("Length of the HashMap:", length);
  
    // Remaining elements
    for (let i = K; i < N; i++) {
      const removedElement = A[i - K];
      const addedElement = A[i];
  
      // Update HM for the current window
      HM[removedElement] -= 1;
      if (HM[removedElement] === 0) {
        delete HM[removedElement];
      }
  
      if (HM.hasOwnProperty(addedElement)) {
        HM[addedElement] += 1;
      } else {
        HM[addedElement] = 1;
      }
  
      const length = Object.keys(HM).length;
      console.log("Length of the HashMap:", length);
    }
  }
  
  const A = [2, 4, 3, 8, 9, 4, 9, 4, 10];
  const K = 4;
  const result = numberOfUniqueElements(A, K);
  

