const arr = [12,34,56,78,907,55,34,65];

function findLargest(arr:Number[]):String{
    let largest:Number = 0;
    let secondLargest:Number = 0;
    arr.forEach(element => {
        if(largest <= element){
            secondLargest = largest;
            largest = element
        }           
    });
    return `largest is: ${largest} and Second largest is : ${secondLargest}`
}
const result = findLargest(arr)
console.log(result)
