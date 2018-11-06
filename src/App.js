import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {id: 'testKey1', name:"PR", age:"27"},
            {id: 'sdvsd', name:"McCoy", age:"27"},
            {id: 'aser', name:"Angel", age:"26"}
        ]
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

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

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            coursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            )

            style.backgroundColor = 'red';
            style[':hover']  = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        let classes = [];

        if (this.state.persons.length <= 2){
            classes.push('red');
        }
        if (this.state.persons.length <= 1){
            classes.push('bold');
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Hi I'm a react App</h1>
                    <p className={classes.join(' ')}>Now it is working!</p>
                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>
            </StyleRoot>
        );
        // return (React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Now it should work')));
    }
}

export default Radium(App);
