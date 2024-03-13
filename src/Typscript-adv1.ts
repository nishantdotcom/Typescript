interface UserData{
    name:string,
    age:number,
}

function Sumofage(user1:UserData,user2:UserData):number
{
    const sumfinal_age=user1.age+user2.age;
    return sumfinal_age;
}

const getfinal_age= Sumofage({name:"nishant",age:21},{name:"raju",age:11});
console.log(getfinal_age);

