//How to create a function
function serveBeverage(drink, quantity){
    console.log("Serve" + quantity +""+drink)
}
serveBeverage("cocola", 4)

let sayHiExpression = function(){
    console.log("Hi Opq Students")
}

sayHiExpression()

let sayByeFunc = () => {
    console.log("Bye OPQ Students")
}
sayByeFunc()


// objects
let captainAmerica = {
    name: 'steve Rogers',
    age : '102',
    allies:['Tony','bruce','bucky'],
    sayHi: function(){
        console.log('Captain Says Hi')
    },

    address:
    {
        country:'USA',
        city:{
            name:'Boston',
            pincode: 12345
        }
    }
}

captainAmerica.sayHi()