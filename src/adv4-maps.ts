//Maps are for same concept  to store key value pair 



type Users={
    name:string,
    age:number

}
const NewProfile= new Map<string,Users>();
NewProfile.set("asd@13",{name:"nik",age:21});
NewProfile.set("spd@133",{name:"sandeep",age:23});
console.log(NewProfile.get("asd@13"));
