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

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div> 
            {this.state.persons.map(person => {
              // JSX objects
              return <Person 
                name={person.name} 
                age={person.age} />
            })}
          </div>
        );
      }

      return (
        <div className="App">
          <h1> Hi, I'm a React app.</h1>
          <p> This is really working </p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?'));
  }
}

export default App;
