// let arr=[3,2,8,9,5,-1,6,9,10];
// let count=1;
// for(let i=0; i<arr.length-1;i++){
//     let max = arr[i];
//     for(let j=i+1;j<arr.length-1;j++){
//         if(arr[i]<=arr[j])
//         max = arr[j];
//     }
//     if( max === arr[i])
//     count = count++;  
// }
// console.log(arr.length-count);

let arr=[3,9,-2,5,7,2,-1,7,8];
let k=12;
let sum=0;

for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            sum=arr[i]+arr[j];
            // console.log(sum);
            if(sum===k)
            console.log('T');
            // else
            // console.log('F');
        }
    }
//SC = 1
//TC =n^2


