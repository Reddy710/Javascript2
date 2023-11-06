function checkPalindrom(str,s,e){
    if(s>=e){
        return true;
    }
    if(str[s] === str[e]){
        return checkPalindrom(str,s+1,e-1)
    }else{
        return false;
    }
}
let str ="abccba";
let s = 0;
let e = str.length-1;
let result = checkPalindrom(str,s,e)
console.log(result)

function nPowerOfA(a, n){
    // let product
    // for(let i = 0; i < n; i++){
    //     product = Math.pow(a,n)
    // }
    // return product;
    if(n == 0){
        return 1;
    }else{
    return a*nPowerOfA(a, n-1);
    }

}
let a = 2;
let n = 5;
let result1  = nPowerOfA(a, n);
console.log(result1)