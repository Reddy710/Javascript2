function reverseNumber(a){
let d = 0;
while(a>0){
v = a%10;
d = d*10 + v;
a = Math.floor(a/10);
}
console.log(d);
}
const a = 2234;
const result = reverseNumber(a);
