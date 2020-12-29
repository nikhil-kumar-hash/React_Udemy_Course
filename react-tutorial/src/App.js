import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

      const style = {
        backgroundColor : 'white',
        font : 'inherit',
        border : '1px solid blue',
        padding : '8px',
        cursor : 'pointer'
      };

      let persons = null;

      if(this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person,index) => {
              return <Person
               name ={person.name}
                age = {person.age}
                click = {this.deletePersonHandler.bind(this,index)}
                key={person.id}
                changed={(event) => {this.nameChangeHandler(event, person.id)}}
                />
            })}
          </div>
        )
      }

      let classes = [];
      if(this.state.persons.length <= 2) classes.push('red')

      if(this.state.persons.length <= 1) classes.push('bold')



    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}> This is really working</p>
        <button style = {style} onClick={this.togglePersonsHandler}> Toggle Display </button>
       {persons}
      </div>
    );
   // return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Hi I am a React App!!')) 
}
}


export default App;
