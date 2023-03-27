//The length property returns the number of characters in a string.

const str = "ayesha"
console.log(str.length)
//The length property does not take any parameters

//The String.length property is a read-only property. There will be no effect if we try to change it manually. For example:

let string2 = "Programming";

// assigning a value to string's length property
string2.length = 5;

// doesn't change the original string
console.log(string2); // Programming

// returns the length of 'Programming'
console.log(string2.length); // 11