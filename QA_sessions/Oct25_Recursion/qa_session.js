let arr = [1,2,3,6,2,8,9];

for(let i = 2; i< arr.length; i++){
    let temp = [];
    for(let j = 2; j< arr.length; j++){
        temp.push(arr[j]);
        console.log(temp)
    }
    break;
        
}

let arr1 = [5,3,6,2,7,3,8,9]
let result = 0

for(let s=0; s<arr.length; s++){
let sum =0;
for (let e=s; e<arr.length; e++){
	sum+= arr[e];
	result += sum;
	console.log(sum);
}

}
console.log(result)

