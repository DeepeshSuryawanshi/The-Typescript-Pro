let userID = 1254587;
function makeUser(){
    let name = "Tom cat";
    function namePrint(){
        let friend = "jerry";
        console.log(userID,name);
    }
    //not axcess of the friend variable
    // console.log(friend);
    namePrint()
}
makeUser();