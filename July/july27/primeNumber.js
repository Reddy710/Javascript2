// function primeNumber(N){
//     let count =0;
//     for (i = 1; i <= N; i++){
//         for (j = 1; j<=N; j++){
//                 if (i%j === 0){
//                     count++;
//                 }
//                 if (count == 2){
//                     console.log("Primenumber");
//                     console.log(i);
//             }
            
//             }
//         }
        
//     }
//     const N = 15;
//     const result = primeNumber(N);

function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function printPrimesInRange(start, end) {
    console.log("Prime numbers between", start, "and", end, ":");
    for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
        console.log(num);
      }
    }
  }
  
  printPrimesInRange(1, 25);
  
    
