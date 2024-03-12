// Interfaces are uses to define user defined objects 

interface User{
    firstName:string,
    lastName:string,
    age:number,
    email?:string,// this is an conditional method it means it may or may not be pass not mandatory
}



function Islegal(user:User)
{
    if(user.age>18)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function Greet(user:User)
{
    console.log( "hello"+user.firstName);
}


const user1={
    firstName:"Nishant",
    lastName:"kumar",
    age:21

}

const user={
    firstName:"Nishant",
    lastName:"kumar",
    age:21,
    email:"nk@gmail.com"

}

Islegal(user1);
Islegal(user);
Greet(user);
Greet(user1);