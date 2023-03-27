//splice is used to delete the elementspresent and add elements in given array

const users = ['a', 'b','c','d','e',];
var check = users.splice(2,3, "Hi"); 
console.log(check); //[  'c', 'd', 'e'  ]
console.log(users); //[ 'a','b', 'Hi']
