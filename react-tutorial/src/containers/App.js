import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
 
class App extends Component {

  state = {
    persons : [
    {id : "1", name : "Nikhil", age : "23"},
    {id : "2", name : "Akhil", age : "19"},
    {id : "3", name : "Harsh", age : "24"}
    ],
    showPersons : false
  };

  switchNameHandler = (newName) => {
    // console.log("Was Clicked!")
    //DONT DO THIS :  this.state.persons[0].age = (Math.floor(Math.random()*30));
    this.setState({
      persons : [
     {name : newName, age : "23"},
     {name : "Akhil", age : "19"},
     {name : "Harsh", age : "2400"}
   ]
  })   
}
 
  nameChangeHandler = (event,id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }; // creating a new copy to prevent mutating the original state
      
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person; // updating it 

    this.setState({persons : persons})


  }


  togglePersonsHandler = () => {
  
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }

  deletePersonHandler = (index) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons]; // another way
      persons.splice(index,1);
      this.setState({persons : persons});
  }


    render() {
      let persons = null;

      if(this.state.showPersons) {
        persons = (
          <div>
            <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
          </div>
        )
      }

    return (
      <div className="App">
        <Cockpit
        persons={this.state.persons}
        toggled={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
   // return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Hi I am a React App!!')) 
}
}


export default App;
