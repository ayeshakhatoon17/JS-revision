//The some() method tests whether any of the array elements pass the given test function.

function isEven(element) {
    return element % 2 === 0;
  }

  let numbers = [1, 3, 2, 5, 4];
  console.log(numbers.some(isEven));
  
  // Output: true 