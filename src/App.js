import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name:"PR", age:"27"},
            {name:"McCoy", age:"27"},
            {name:"Angel", age:"26"},
        ]
    }

    switchNameHandler = (newName) => {
        // console.log("Clicked!")
        // DON'T DO THIS this.state.persons[0].name = "Panagiotis Ressos"
        this.setState({persons: [
                {name:newName, age:"27"},
                {name:"McCoy", age:"27"},
                {name:"Angel", age:"26.5"},
            ]
        })
    }

    nameChangedHandler = (event) => {
        // console.log("Clicked!")
        // DON'T DO THIS this.state.persons[0].name = "Panagiotis Ressos"
        this.setState({persons: [
                {name:'PR', age:"27"},
                {name:event.target.value, age:"27"},
                {name:"Angel", age:"26"},
            ]
        })
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            coursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi I'm a react App</h1>
                <p>Now it is working!</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('PR!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Panagiotis")}
                    changed={this.nameChangedHandler}>My Hobbies: coding</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
        // return (React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Now it should work')));
    }
}

export default App;
