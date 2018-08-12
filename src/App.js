import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'asdjk', name: 'Janine', age: 22},
      { id: 'fewfe', name: 'Andreas', age: 26},
      { id: 'aksjf', name: 'Ingeborg', age: 22}
    ],
    otherState: 'some other value',
    showPersons: false
  }



  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // lager nytt objekt med spread
    const person = {
      ...this.state.persons[personIndex]
    };

    // update person
    person.name = event.target.value;

    // update person-array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons} );
  }

  // slette personer
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    // ny liste med samme elementer fra den gamle listen ved å bruke spread (...)
    const persons = [...this.state.persons];
    // fjerner ett element fra arrayen
    persons.splice(personIndex, 1);
    // oppdaterer personer
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // using pseudo-selector (hover-style)
      const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen', 
          color: 'black'
        }
      };

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div> 
            {this.state.persons.map((person,index) => {
              // JSX objects
              return <Person 
              click ={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                key={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}
          </div>
        );
        // setting style dynamically
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon', 
          color: 'black'
        }
      }

      // css classlist
      const classes = [];
      if(this.state.persons.length <= 2){
        classes.push('red'); // classes = ['red']
      }

      if(this.state.persons.length <= 1){
        classes.push('bold');   // classes = ['red', 'bold']
      }

      return (
        // Wrapping application in StyleRoot for media queries
        <StyleRoot>
        <div className="App">
          <h1> Hi, I'm a React app.</h1>
          <p className={classes.join(' ')}> This is really working </p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
        </StyleRoot>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?'));
  }
}

export default Radium(App);
