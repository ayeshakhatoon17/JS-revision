//The Object.create() method creates a new object using the prototype of the given object.
/* The syntax of the create() method is:
Object.create(proto, propertiesObject) 
*/
let obj = { name: 'ayesha', age: 22 }
let create = Object.create(obj)
obj.name ="ayoo"
console.log(create)
