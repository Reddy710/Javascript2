// let arr = [{name:"Karthik", name1:"jai"}, 
// {designation:"Engineer", designation1:"software Engineer"}, 
// {company:"Boeing", conpany1: "TCS"}];
// let vowels = ["A","E","I","O","U","a","e","i","o","u"]
// for (let i =0; i< arr.length; i++){
//     for(key in arr[i]){
//         let count = 0;
//         let str = arr[i][key].toString();
//         for(let j=0; j<str.length;j++){
//             if(vowels.includes(str[j])){
//                 count++;
//             }   
//         }
//         console.log(`Key: ${key}, Vowel Count: ${count}`);

//    }
  
// }

let arr = [{name:"Karthik", name1:"jai"},
{designation:"Engineer", designation1:"software Engineer"},
{company:"Boeing", conpany1: "TCS"}];
let vowels = ["A","E","I","O","U","a","e","i","o","u"]
for (let i =0; i< arr.length; i++){
    for(key in arr[i]){
        let count = 0;
        for(let j=0; j<arr[i][key].length;j++){
            if(vowels.includes(arr[i][key][j])){
                count++;
            }  
        }
        console.log(count);
}
}