//  no one can change the value of variable
interface stident { 
    readonly _id: number,
    name: string,
    school: string,
    is_active: true}
    
let Student:stident = {
    _id:123,
    name:"hitesh",
    school:"vsk school",
    is_active:true
}

Student.name = "hitesh"
// @ts-ignore
Student._id = "3244" // typescript not allow to change the type of id.