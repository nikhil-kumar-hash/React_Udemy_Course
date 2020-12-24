// Array Destructuring

[a,...b] = [1,2,3,4,5,6];
console.log(a) // 1
console.log(b); // [2,3,4,5,6]


// Object Destructuring

({name} = {name : 'Nikhil', age : 23}); // need () for object destructuring without declaration
console.log(name);