class Employee
{
    constructor(name, role)
    {
        this.name = name
        this.role = role
    }

    getDetails()
    {
        console.log("Employee Name: " + this.name + " role "+ this.role)
    }

}
class Manager extends Employee
{
    constructor(name, department)
    {
        super(name, 'Manager')
        this.department = department
    }

    manageTeam()
    {
        console.log("I am " + this.name + " managing this department " + this.department)
    }
    getDetails()
    {
        console.log("I am new version of get detials")
    }

}

let m1 = new Manager("Surendra", "IPA")

m1.name
m1.role
m1.getDetails()
m1.manageTeam()