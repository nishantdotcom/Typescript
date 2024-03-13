// generic help to create genric type of function and  expicitly pass the type during calling of the function

function Identity<T>(args:T):T{
    // as here we design the function using generics

    return args;
}

function getFirstElement<T>(args:T[]) :T{

    return args[0];
}


 const val1=getFirstElement<string>(["nishant","kumar"]);
 const finalans1= val1.toUpperCase();
 const val2=getFirstElement<number>([100,2,3]);

 interface profile{
    name:"nishant"
 }

const pp=getFirstElement<profile>([{name:"nishant"},{name:"nishant"}])// genric can be more complicated class


const x=Identity<string>("nishant");// this has return type stirng

const y=Identity<number>(100);// this has return type number