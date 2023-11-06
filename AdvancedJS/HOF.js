let myRadiusArray = [2,3,4,5,6,8]

// function area(myRadiusArray)
// {
//     let result =[]
// for (let i=0; i<myRadiusArray.length;i++)
// { 
// result.push(myRadiusArray[i]*myRadiusArray[i]*3.14)
// }
// return result
// }

// let result = area(myRadiusArray)
// console.log(result)
//Higher Order Function - A function which is capable of tacking callback function as an argument is called HOF

// function cirCum(myRadiusArray)
// {
//     let result =[]
// for (let i=0; i<myRadiusArray.length;i++)
// { 
// result.push(myRadiusArray[i]*2*3.14)
// }
// return result
// }

// let result = cirCum(myRadiusArray)
// console.log(result)

// function diameter(myRadiusArray)
// {
//     let result =[]
// for (let i=0; i<myRadiusArray.length;i++)
// { 
// result.push(myRadiusArray[i])
// }
// return result
// }

// let result = diameter(myRadiusArray)
// console.log(result)

function Calculate(myRadiusArray, logic ){
    let result=[]
    for (let i=0; i<myRadiusArray.length;i++)
    { 
    result.push(logic(myRadiusArray[i]))
    }
    return result
    }
   

function circleArea(radius)
{
    return 3.142 * radius * radius
}
let result = Calculate(myRadiusArray, circleArea)
console.log(result)


