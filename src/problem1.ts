// given the list of userse  count the number of user whose age is greater then 18


 interface Userx{
    name:string,
    age:number,
 }

 



 function filterProfile(list:Userx[]) :Userx[]
 { 

     var listfinal:Userx[]=[];
      for(let i=0;i<list.length;i++)
      {
        if(list[i].age>18)
        {
            listfinal.push(list[i]);

        }
        
      }
      return listfinal

 }





 console.log(filterProfile([
    {
        name:"nisnat",
        age:18
    },
    {
        name:"nisnat",
        age:12
    }
    ,
    {
        name:"nisnat",
        age:20
    },
    {
        name:"nisnat",
        age:11
    },
    {
        name:"nisnat",
        age:28
    }
 ]))