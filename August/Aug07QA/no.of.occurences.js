function numberOfOccurences(userInput,characterToBeCounted){
    let count =0;
    for (i=0;i<userInput.length;i++){
        if(userInput.charAt(i) === characterToBeCounted){
            count++;
        }

    }
return count;
}
const userInput = "BharathKumarReddy";
const characterToBeCounted = "a";
const result = numberOfOccurences(userInput,characterToBeCounted);

console.log(result);