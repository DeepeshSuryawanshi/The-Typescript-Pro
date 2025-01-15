let score: number | string;
score = 33 // number 
score = "32" // string
// no the score is accept two types of data.
type user = {
    name:string,
    id:number
}
type admin = {
    username:string,
    id:number
}

let Dev:user | admin;

Dev = {name:"Deepesh singh",id:432} // user type
Dev = {username:"Devsji",id:432} // Admin type 