import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
    {name : "Nikhil", age : "23"},
    {name : "Akhil", age : "19"},
    {name : "Harsh", age : "24"}
    ]
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
 
  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name : "Nikhil", age : "23"},
        {name : event.target.value , age : "19"},
        {name : "Harsh", age : "2400"}
      ]
    })
  }


    render() {

      const style = {
        backgroundColor : 'white',
        font : 'inherit',
        border : '1px solid blue',
        padding : '8px',
        cursor : 'pointer'
      }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p> This is really working</p>
        <button style = {style} onClick={this.switchNameHandler.bind(this,'Nonu')}> Switch Name </button>
        <Person
         name={this.state.persons[0].name}
          age={this.state.persons[0].age}>
            My hobbies are : Gaming
           </Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'Prerit')}
        changed={this.nameChangedHandler}/>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
   // return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Hi I am a React App!!')) 
}
}


export default App;
