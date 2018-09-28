import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi I'm a react App</h1>
                <p>Now it is working!</p>
                <Person/>
            </div>
        );
        // return (React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Now it should work')));
    }
}

export default App;
