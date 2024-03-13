//pick -> pick let you pick  diffrent property from existing interface
//partial-> partial lets tou create an optional propertieds in it.
//Readonly -> It lets you create object and array in readonly format

 interface  Profile{
    name:string,
    age:number,
    email:string,
    password:string,
 }
 type getPersonalData ={
    id:string,
    hobby:string,
    education:string
 }

 
 //pick is properties of generics and select some already defined interface
 type UpdateProfile= Pick<Profile,"name"|"age"|"password">
 // pick  properties from  type 
 type checkdata=Pick<getPersonalData,"id"|"hobby">
 // partial
 type UpdateProfilePartial= Partial<UpdateProfile>
 // partial
 type checkdataPartial= Partial<checkdata>


 function UpdateProps(data:UpdateProfile)
 {

 }
 ///----------------------------------------------------------------



 // READONLY TYPE
 type Animal={
    readonly name:string,
    readonly age:number,
    readonly speak:string
 }

  const dog:Animal={
    name:"dodo",
    age:5,
    speak:"bark"

  }

  console.log(dog);
 // dog.name="raj" if we try to do it says error  name is readonly type

 //Readonly

 type Config={
    endpoint:string;
    apiKey:string;

 }

 const finalconfig:Readonly <Config>={
    endpoint:"https://github.com",
    apiKey:"nsjbfkldbfkd"

 }


 console.log(finalconfig);