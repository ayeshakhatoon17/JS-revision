//The Object.assign() method copies all the enumerable properties of the given objects to a single object and returns it.
let obj1 = { name: "ayesha",}
let obj2 ={age: 22}
let assignobj = Object.assign(obj1,obj2)
console.log(assignobj)
//{ name: 'ayesha', age: 22 }