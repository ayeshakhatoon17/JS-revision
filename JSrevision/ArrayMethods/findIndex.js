//The findIndex() method returns the index of the first array element that satisfies the provided test function or else returns -1.

let num = [1, 3, 4, 9, 8];


function even(a) {
  return element % 2 == 0;
}


let evenNumber = num.findIndex(even);
console.log(evenNumber);