// Map -The map method returns a new array by applying the callback function on each element of an array

//using map
let num = [5,4,3,2,1] 
function name(x) {
    console.log(x)
}
num.map(name)

//using map with arrow function
let numbers=[5,4,3,2,1]
numbers.map((x) => console.log(x));
//5 4 3 2 1
console.log(numbers.map((x)=>x)) //it returns an array 
//[5,4,3,2,1]