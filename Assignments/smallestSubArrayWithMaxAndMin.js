const arr= [1,2,3,1,3,4,6,4,6,3];
const result = smallestSubArrayWithMaxAndMin(arr);
console.log(result);
 
 function smallestSubArrayWithMaxAndMin(arr){
    let min = Number.MAX_VALUE
    let max = Number.MIN_VALUE
    for(let i=0; i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
        if(arr[i]<min){
            min = arr[i]
        }
    }
    console.log(max)
    console.log(min)
    let isMin = false
    let isMax = false
    let v = -1
    let smallestLength = Number.MAX_VALUE
    for(let j=0; j<arr.length; j++){
        if(arr[j]==min && !isMax){
            isMin = true
            v = j
        }
        if(arr[j]==max && !isMin){
            isMax = true
            v = j
        }
        if((arr[j] == max && isMin) || (arr[j] == min && isMax)){
            if((j-v+1) < smallestLength){
                smallestLength = j-v+1
            }
            isMax = false
            isMin = false
        }
    }
    console.log(smallestLength)
}
for(let col=0; col<=arr.length;col++)
{
for(let row=0;row<=arr.length;row++)
sum+=arr[row][col]
}
