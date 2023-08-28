class Cricketer{
    constructor(name,role)
    {
        this.name=M.S.Dhoni;
        this.role = wicket-keeper-batsman;
    }
    gethDetails()
    {
        console.log("Employee Name:" + this.name + "role" + this.role)
    }

}
class Captain extends Cricketer
{
    constructor(name,department)
    {
        super(name,'Captain')
        this.department = teamIndia;
    }
    leadingTeam()
    {
        console.log("I am" + this.name + "leading the " + this.department)
    }

}
const p1 = new Cricketer();
console.log(p1);