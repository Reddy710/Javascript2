//callback Function - A function which is passed as an argument to other functions is called as call back function
function printName(cb1)
{
    console.log('Shikar')
    cb1()
}

function printLastName()
{
    console.log('Dhawan')
}
printName(printLastName)

