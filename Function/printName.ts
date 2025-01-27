
import users from '../data/userSheet'
import user from '../data/users'
function printUser(users:user[]){
    users.map(item=>console.log(item.name))
}
printUser(users);