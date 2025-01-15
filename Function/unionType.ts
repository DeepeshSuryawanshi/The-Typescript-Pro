function getId(id:string | number): string | number {
    if (typeof id === "string") {
        return `the user ID is ${id}`.toUpperCase()
    }
    else{
        return id + 12;
    }
}
/* thie function is accepting the string and number type 
and return the both type of data. */
let sID = getId("234")
let nID = getId(234);
console.log(`teh result of the number ${nID} and String ${sID}`);