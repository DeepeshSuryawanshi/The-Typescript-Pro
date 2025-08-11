
import {users} from "../Database/userSheet"
import User from "../Database/users"
function printUser(users:User[]){
    users.map(item=>console.log(item.name))
}
//@ts-ignore
printUser(users);