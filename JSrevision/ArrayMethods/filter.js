//The filter() method returns a new array with all elements which passes the test by the given function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function Even(a) {
  if (a % 2 == 0)
    return true;
  else
    return false;
}
//using filter method to check if the given array passes the test of function even
let evennumbers = numbers.filter(Even);
console.log(evennumbers);
//[ 2, 4, 6, 8, 10 ]