/* replace() Syntax
The syntax of replace() is:

str.replace(pattern, replacement)
Here, str is a string.

replace() Parameter
The replace() method takes in:

pattern - either a string or a regex that is to be replaced
replacement - the pattern is replaced with this replacement (can be either a string or a function) */


const str = "ayesha"
console.log(str.replace('a', 'A')) //it replaces the first occurence i.e it replaces only first a
// output: Ayesha

// TO replace all occurences