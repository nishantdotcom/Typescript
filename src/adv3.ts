//Record and map

//Record is better way to manage object in typescript


type ProfileUSer=Record<string,{name:string,age:number,married:boolean,skill:string[]}>

const userList:ProfileUSer={
    "abd":{
        name:"nks",
        age:21,
        married:false,
        skill:["asspl","sca"]
    },
    "pp":{
        name:"nks",
        age:21,
        married:false,
        skill:["asspl","sca"]
    },
    
}