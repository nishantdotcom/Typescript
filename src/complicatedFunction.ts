
function DoSomething(a:()=>void, b:(x:number)=>void):string{
    a();
    b(1);
    return "hello"
}



function ComplicatedFunction(FirstArg:(x:number,y:string)=>string, SecondArg:(p:boolean, q:string)=>number):string{


     const firstsole= FirstArg(1,"apple"); // as we knw this is function so it return string  as given in type
     const secondSol= SecondArg(true,"waah");// as we knw this is function which return number
     return "got it"// this it the overall function return
}




