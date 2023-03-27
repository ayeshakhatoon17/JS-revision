//The values() method returns a new Array Iterator object that contains the values for each index in the array
let names = [ 'aaira', 'khatoon', 'aaira', 'yahiya', 'haha' ]
let iterator = names.values()
for (let value of iterator){
    console.log(value)
}