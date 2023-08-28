function findSumOfNNumbers(N){
    let sum = 0;
    for(let i = 0; i <= N; i++){
        sum += i;
    }
    console.log(sum);
}
const N = 100;
const result = findSumOfNNumbers(N);