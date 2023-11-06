function minSubArrayLen(arr){
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let length = Number.MAX_VALUE;
    
    // find minima of array
    for(let i=0; i<arr.length; i++){
        
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(min);   
    console.log(max);
    for(let i=0; i<arr.length; i++){
        let new_length = 0;
        if (arr[i] == max){
            for(let j=i+1; j<arr.length; j++){
                
                if (arr[j] == min){
                    new_length = j-i+1;
                    if(new_length < length){
                        length = new_length;
                    }
                }
            }
        }
        if (arr[i] == min){
            for(let j=i+1; j<arr.length; j++){
                
                if (arr[j] == max){
                    new_length = j-i+1;
                    if(new_length < length){
                        length = new_length;
                    }
                }
            }
        }
    }
    return length;
}
const arr = [2,2,6,4,5,1,5,2,6,4,1];
const result = minSubArrayLen(arr);
console.log(result);