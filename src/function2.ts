//how to pass function as an argument


///here fun:()=>void means ()-> contain no any argument and has void 
//return type about the fucntion that has passed 
function GetAlertin1s(fun :()=>void)
{
    setTimeout(fun,1000);
}


GetAlertin1s(()=>{
    console.log("HEllo");
})