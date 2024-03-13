// Intersection let you do the  add properties from diffrent types and interfaces.
// yes you can merge different  interfaces and class 

// one is type
type Employe={
    name:string,
    startdate:Date,

}
// other is interface

interface Manager{
    name:string,
    department:string,
}

// and the intersection is tech lead which is the type
 type TechLead=  Employe & Manager

//  const t:TechLead={
//     name:"Nishant",
//     startdate: new Date(),
//     department:"addkl"
//  } 

 