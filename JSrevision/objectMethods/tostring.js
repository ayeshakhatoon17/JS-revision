//The Object.toString() method returns the given object as a string.
let num= 10
let date = new Date();
let obj = {
name: "ayesha",
age: 22
}
console.log(num.toString(2))//1010
console.log(date)//2023-03-26T17:37:02.568Z
console.log(date.toString());//Sun Mar 26 2023 17:36:34 GMT+0000 (Coordinated Universal Time)
console.log(obj.toString()) //[object Object]
//When used with objects, the toString() method returns the string "[object Object]" by default. However, it returns the primitive value for certain built-in objects like String, Number, Boolean, Array and Date.