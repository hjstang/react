import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';

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
      let persons = null;
      let btnClass = '';

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
        btnClass = classes.Red;
      }

      // css classlist
      const assignedClasses = [];
      if(this.state.persons.length <= 2){
        assignedClasses.push(classes.red); // classes = ['red']
      }

      if(this.state.persons.length <= 1){
        assignedClasses.push(classes.bold);   // classes = ['red', 'bold']
      }

      return (
        <div className={classes.App}>
          <h1> Hi, I'm a React app.</h1>
          <p className={assignedClasses.join(' ')}> This is really working </p>
          <button 
            className = {btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?'));
  }
}

export default App;
