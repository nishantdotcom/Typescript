
// Array can be defined as  number[]

type arrArg= number[]; /// define type and use it any where 
function FindMax(arr:arrArg)
{
    let maxANS=0;
    for(let i=0;i<arr.length;i++)
    {
        if(maxANS<arr[i])
        {
            maxANS=arr[i];
        }
    }
    return maxANS;

}

console.log(FindMax([1,2,3]));