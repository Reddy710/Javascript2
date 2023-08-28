// function removeElementAtIndex(originalArray) {
//     const newArray = [];
//     let count = 0;
//     let evenSum = 0;
//     let oddSum = 0;
  
//     for (let i = 0; i < originalArray.length; i++) {
//         for(let j = 0; j < originalArray.length;j++){
            
//         if (i !== j) {
//         newArray.push(originalArray[j]); 
//       }
//     }
// }
// for (let k = 0; k < newArray.length; k++){
    
//     if(k%2===0)
//     evenSum += newArray[k];
//     else
//     oddSum += newArray[k];
// }
// if(evenSum === oddSum)
//     count=count++;
// console.log(count)
  
//     return newArray;
//   }
  
//   // Example usage:
//   const originalArray= [1, 2, 3, 4, 5];
//   console.log(countSpecialIndices(newArray)); // Output: 0
  
  
//   const newArray = removeElementAtIndex(originalArray);
//   const originalArray2 = [2, 1, 6, 4];
// console.log(countSpecialIndices(originalArray2)); // Output: 1

// const originalArray3 = [1, 1, 1];
// console.log(countSpecialIndices(originalArray3)); // Output: 3
  
// //   console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
// //   console.log(newArray); // Output: [1, 2, 4, 5] (new array without the element at index 2)
function removeElementAtIndex(originalArray) {
  const newArray = [];
  let count = 0;

  for (let i = 0; i < originalArray.length; i++) {
    let evenSum = 0;
    let oddSum = 0;

    for (let j = 0; j < originalArray.length; j++) {
      if (i !== j) {
        newArray.push(originalArray[j]);
      }
    }

    for (let k = 0; k < newArray.length; k++) {
      if (k % 2 === 0) {
        evenSum += newArray[k];
      } else {
        oddSum += newArray[k];
      }
    }

    if (evenSum === oddSum) {
      count++;
    }

    // Reset the newArray for the next iteration
    newArray.length = 0;
  }

  return count;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
console.log(removeElementAtIndex(originalArray)); // Output: 0

const originalArray2 = [2, 1, 6, 4];
console.log(removeElementAtIndex(originalArray2)); // Output: 1

const originalArray3 = [1, 1, 1];
console.log(removeElementAtIndex(originalArray3)); // Output: 3



// function removeElementAtIndex(originalArray) {
//       const newArray = [];
//       let count = 0;
//       let temp = [];
//       let evenSum = 0;
//       let oddSum = 0;
    
//       for (let i = 0; i < originalArray.length; i++){
//         if (i==0)
//         originalArray.slice(i);
//         else
//         temp.push(originalArray(i));
//         for(let i=0;i<temp.length; i++){
//           if (i % 2 === 0) {
//             evenSum += newArray[k];
//             } else {
//               oddSum += newArray[k];
//             }
//           }
//           if (evenSum === oddSum) {
//              count++;
//             }
//              return count;
//         }

//       }
//       const originalArray = [1, 2, 3, 4, 5];
//       const temp = removeElementAtIndex(originalArray);
//       console.log(temp); // Output: [1, 2, 3, 4, 5] (new array without the element at index 2)



  
  

  
  
  