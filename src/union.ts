// Implementing types instead of  using interfaces.
// as we know interface let you create class with attributes and 

type GreeArgs= number|string;

function Congrats( id:GreeArgs) // here union is applied to check types either number or String
{
    console.log(`Id of the person is ${id}`);
}

Congrats(1);// it work fine in caseof number
Congrats("1")//  it also works if type is either string or number

