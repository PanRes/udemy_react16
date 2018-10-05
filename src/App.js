import React, { Component } from 'react';
import ValidationComponent from './ValdationComponent/ValdationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {

    state = {
        inputLength: 0,
        stringOutput: ''
    }

    onClickChar = (event, index) => {
        const stringOutput = [...this.state.stringOutput];
        stringOutput.splice(index, 1).join('');
        this.setState({stringOutput: stringOutput});
    }

    inputChangedHandler = (event, style) => {

        const inputString = event.target.value;

        const stringOutput = (
            <div style={style}>
                {inputString.split('').map((character,index) => {
                    return <CharComponent
                            style={style}
                            cssStyle={style}
                            character={character}
                            clicked={() => this.onClickChar(index)}/>
                })}
            </div>
        )

        this.setState({stringOutput: stringOutput,inputLength: inputString.length});
    }


    render() {

        const style = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        }

        return (
            <div>
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <div className="App">
                    <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                    <input type="text"
                           onChange={(event) => this.inputChangedHandler(event, style)}/>
                    <ValidationComponent
                            inputLength={this.state.inputLength}
                            value={this.state.stringOutput}/>
                    <p>Input's length: {this.state.inputLength}</p>
                    <p>{this.state.stringOutput}</p>
                </div>
            </div>
        );
    }
}

export default App;
