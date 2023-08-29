let a=[-1,4,8]
let b=[2,9]
let c=[]
let i=0,j=0
while(i<a.length && j<b.length)
{
    if(a[i]<b[j])
    {
        c.push(a[i])
        i++
    }
    else
    {
        c.push(b[j])
        j++
    }
}
while(j<b.length)
{
    c.push(b[j])
    j++
}
while(i<a.length)
{
    c.push(a[i])
    i++
}
console.log(c)