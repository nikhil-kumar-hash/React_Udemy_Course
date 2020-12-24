

// utility.js
export const clean = () =>{}
export const baseData = 10;


// import { clean } from './utility.js' is called a named export
// import {baseData as Data} from './utility.js' assigning alias to our import


// Person.js

const Person = {
    name: 'Max'
}

export default Person // default export from Person.js
// i.e if you import from Person.js you will get the Person object as the default import
