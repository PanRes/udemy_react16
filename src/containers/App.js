import React, {Component} from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

  state = {
    persons: [
      {id: 'testKey1', name: "PR", age: "27"},
      {id: 'sdvsd', name: "McCoy", age: "27"},
      {id: 'aser', name: "Angel", age: "26"}
    ]
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  //Test
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
                persons={this.state.persons}
                deletePersonHandler={this.deletePersonHandler}
                nameChangedHandler={this.nameChangedHandler}
              />;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return (React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Now it should work')));
  }
}

export default App;
