// INterfaces can also used to create class and apply constructors init.

interface Person{
    name:string,
    age:number,
    email?:string,
    greet(pharse:string):void;// this is a function that  string as an argument and return void
    isLegal():boolean// this also an function that validate weather user is legal or not
}

class Employee implements Person{
    name:string;
    age: number;
    email?:string;
    constructor(n:string, a:number, em:string)
    {
        this.name=n;
        this.age=a;
        this.email=em;
    }
    greet(pharse: string): void {
    
        console.log(`${pharse} ${this.name}`);
    }
    isLegal(): boolean {
        if(this.age>18)
        {
            return true;
        }
        else{
            return false;
        }
    }





}

const e= new Employee("nishant",21,"")
console.log(e);
e.greet("hii");
console.log(e.isLegal());


