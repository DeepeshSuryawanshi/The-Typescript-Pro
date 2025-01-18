//importing the function from emailEncrypt
import { emailEncript } from "./emailEncrypt";
// limit and set the data inside the variable or object.
function studentPrint(person:{name:string,city:"Delhi" | "Noida" | "Ahmedaabd" | "Gwalior"}) {
    return `This Student ${person.name} from ${person.city}`
}
let s1 = studentPrint({name:"Deepesh",city:"Gwalior"}); // work find
//@ts-ignore
let s2 = studentPrint({name:"Dheraj",city:"Akwai"}) // throing error. 
// city "Akwai" is not assiable to the function

//testing the emport 
let emailhash = emailEncript("Depeshsuryawnashi@gmail.com")
console.log(s1,"email is ",emailhash);