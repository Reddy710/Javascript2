function mergeSort(arr,s,m,e)
{
let c = [];
let p1 = s;
let p2 = m+1;
while(p1<=m && p2<=e) 
{
    if(arr[p1]< arr[p2])
    {
        c.push(arr[p1]);
        p1++;
    }
    else
    {
        c.push(arr[p2]);
        p2++;
    }
}
while(p1<=m)
{
    c.push(arr[p1]);
    p1++;
}
while(p2<=e)
{
    c.push(arr[p2]);
    p2++;
}
console.log(c);
for(let i = 0; i<c.length; i++)
{
    arr[s+i] = c[i];
}
console.log(arr);
}

const arr = [4,8,-1,2,6,9,11,3,4,7,13,0];
let s = 2;
let m = 6;
let e = 9;
let result = mergeSort(arr,s,m,e);
console.log(result);