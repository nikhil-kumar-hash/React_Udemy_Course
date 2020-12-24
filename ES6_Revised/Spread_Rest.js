let arr1 = [1,2,3,4];
let arr2 = [...arr1,5,6,7]; // spread operator
console.log(arr2);

function sortArgs(...args) { // Rest Operator
    // By using ...args we merge all arguments that we get into an array hence we can apply array methods
    return args.sort(); // Used to merge a list of functional arguments into an array
}


const person = {
    name : 'Nikhil'
};

const newPerson = {
    ...person,
    age : 28
};

console.log(sortArgs(6,9,8,3,5,1,0,8,7,6,3,2,1,5,6,3,4,11,13))
console.log(newPerson);