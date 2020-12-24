
let str = "abcd";
let str2 = str;
str = "23131312"
console.log(str2);

// Bool , String , integers are all primitive types

// Arrays and objects are reference types

const person = {
    name : "Akhil"
}

const newperson = person; // copy by reference
const person_2 = { // copy by value
    ...person
}

person.name = 'Nikhil';
console.log(newperson); // Nikhil will get copied
console.log(person_2); // Akhil will get copied
// workaround this


