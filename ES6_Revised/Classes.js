// class Human {
//     constructor () {
//         this.gender = 'male';
//     }

//     printGender() {
//         console.log(this.gender);
//     }
// }

// class Person extends Human { // inheritance
//     constructor () {
//         super(); // to call the parent constructor 
//         this.name = 'Nikhil'; // assign data members of a class
//     }

//     printName() {
//         console.log(this.name);
//     }
// }

// const obj = new Person();
// obj.printName();
// obj.printGender();


/*----------------------------------*/

// NEW SYNTAX

class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Nikhil'
    gender = 'female';

    printName = () => {
        console.log(this.name);
    }
}

const obj = new Person();
obj.printGender();
obj.printName();