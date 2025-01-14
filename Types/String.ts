import { log } from "console"
// @ts-ignore
let name = "Deepesh singh" //give the type of the variable 
// solution of the error is 
// name:string
let names:Array<string> = ["Deepesh","Uday","Samar","Ankit"]

function namePrinter(name:Array<string>){
    for (let i = 0; i < name.length; i++) {
        log(name[i]);        
    }
}
namePrinter(names);