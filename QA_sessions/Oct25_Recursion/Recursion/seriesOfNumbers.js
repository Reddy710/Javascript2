function seriesOfNumbers(n){
    if(n == 1){
        console.log(1)
        return n;
    }
     seriesOfNumbers(n-1);
      console.log(n);
    return n;
}
let n = 10;
let result = seriesOfNumbers(n)

// palindrome
function findPalindrome(arr){
    let s = 0
    let e = arr.length-1;
    while(s<=e){
        if(arr[s] === arr[e]){
            console.log("Given string is a palindrome")
        }
        else{
            console.log("Given string is not a palindrome")
        }
        s++;
        e--;
    }
}
let arr =['a','a','c','b','a'];
findPalindrome(arr)

