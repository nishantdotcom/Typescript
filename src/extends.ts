

interface Employee{
    name:string,

}
interface Manager
{
    age:number,
}

// interface lets you extend the  diffrent interface and create a new ones
interface BigBoss extends Employee,Manager{
     desc:string
}