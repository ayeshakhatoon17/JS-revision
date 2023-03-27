//The find() method returns the value of the first array element that satisfies the provided test function.
let num = [1, 3, 4, 9, 8];


function even(a) {
  return element % 2 == 0;
}


let evenNumber = num.find(even);
console.log(evenNumber);

// Output: 4