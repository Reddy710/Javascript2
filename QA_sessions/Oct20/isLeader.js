let arr = [5,7,6,1,-1,0,5,2]
let count = 0;

for (let i = 0; i<arr.length; i++){
    let isLeader = true;

    for(let j = i+1; j<arr.length; j++){
        if(arr[j]>arr[i]){
            isLeader = false;
            break;
        }
    }

    if(isLeader){
        count++;
    }
}
console.log(count)