//The every() method checks if all the array elements pass the given test function.
let ageOfPeople = [18,19,22,7,9]
function checkAge(age){
    return age>=18
}
let check = ageOfPeople.every(checkAge)