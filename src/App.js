import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Janine', age: 22},
      { name: 'Andreas', age: 26},
      { name: 'Ingeborg', age: 22}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    this.setState({persons: [
      { name: newName, age: 22},
      { name: 'Andreas', age: 26},
      { name: 'Cathrine', age: 21}
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name: "Janine", age: 22},
      { name: event.target.value, age: 26},
      { name: 'Cathrine', age: 21}
    ]
  } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      return (
        <div className="App">
          <h1> Hi, I'm a React app.</h1>
          <p> This is really working </p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          { 
            this.state.showPersons ? 
              <div> 
                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}/>
                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, 'Janine!')}
                  changed={this.nameChangedHandler}>My hobbies: Hunting birds xP </Person>
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}/>
                </div> : null
          }
        </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?'));
  }
}

export default App;
