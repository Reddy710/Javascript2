// function existanceOfPairs(A)
// {
// const HM = {};

// for (let i = 0; i < A.length; i++) {
//   const key = A[i];

//   if (HM.hasOwnProperty(key)) {
//     // If the key already exists, update the value
//     HM[key]++;
//   } else {
//     // If the key doesn't exist, add it with an initial value of 1
//     HM[key] = 1;
//   }
// }
// console.log(HM);
// for (let i=0;i<A.length;i++){
//     const key = A[i];
//     let k = 22;
//     if(k-key in HM){
//         if(key == (k-key)||HM((k-key)>1)){
//             continue;
//         }
//     }else{
//         return true;
//     }
// }
// return false;
// }
// const A= [8,9,1,-2,5,11,5,11,-6,7,5];
// const Reuslt = existanceOfPairs(A)

function existenceOfPairs(A) {
    const HM = {};
  
    for (let i = 0; i < A.length; i++) {
      const key = A[i];
  
      if (HM.hasOwnProperty(key)) {
        // If the key already exists, update the value
        HM[key]++;
      } else {
        // If the key doesn't exist, add it with an initial value of 1
        HM[key] = 1;
      }
    }
  
    console.log(HM);
  
    for (let i = 0; i < A.length; i++) {
      const key = A[i];
      const k = 22;
  
      if (HM.hasOwnProperty(k - key)) {
        if (key === k - key && HM[k - key] > 1) {
          continue;
        }
      } else {
        return true;
      }
    }
  
    return false;
  }
  
  const A = [8, 9, 1, -2, 5, 11, 5, 11, -6, 7, 5];
  const Result = existenceOfPairs(A);
  console.log(Result);
  