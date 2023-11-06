class Person
{
    constructor(name, age, gender)
    {
        this.name = name
        this.age = age
        this.gender = gender
    }

    introduce()
    {
        console.log("My name is" + this.name +" and my age is " + this.age)
    }
    changeName(newName)
    {
        this.name = newName
    }
}
let p1 = new Person("Ramana", 25, "M")
let p2 = new Person("Yogi", 24, "M")

console.log(p1)
console.log(p2)
p1.introduce()
p1.changeName("Venkat")
p2.introduce()
p1.changeName("Venkat")
p1.introduce()


//Encapsulation
class Encapsulation
{
    constructor(accountnum, bankname, ifsc, balance)
    {
        this.accountnum = accountnum
        this.bankname = bankname
        this.ifsc = ifsc
        this.balance = balance
    }
    deposit(amount)
    {
        this.balance += amount
    }

    withdraw(amount)
    {
        if (amount <= this.balance)
        {
        this.balance -= amount
        }
        else
        {
            console.log("balance not suff")
        }
    }

    getBalance()
    {
        return this.balance
    }
}

let acc1 = new Encapsulation(560073, 'HDFC', 'HDFC00056', 5000)
console.log( acc1.getBalance())
acc1.withdraw(600)
console.log( acc1.getBalance())

