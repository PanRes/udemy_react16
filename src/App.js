import React, { Component } from 'react';
import ValidationComponent from './ValdationComponent/ValdationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {

    state = {
        inputLength: 0,
        stringOutput: ''
    }

    onClickChar = (id) => {
        let test = this.state.stringOutput
			.split('')
			.filter((char, index) => id !== index)
			.join('');

        console.log(test);
        this.setState({
            stringOutput: test
        });
    }

    stringToCharComponet = (style) => (
        <div style={style}>
            {this.state.stringOutput.split('').map((character, index) => (
                <CharComponent
                    style={style}
                    cssStyle={style}
                    character={character}
                    clicked={() => this.onClickChar(index)}
                />
            ))}
        </div>
    )

    inputChangedHandler = (event) => {

        const inputString = event.target.value;

        this.setState({stringOutput: inputString,inputLength: inputString.length});
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
                           onChange={(event) => this.inputChangedHandler(event)}
                           value={this.state.stringOutput}
                    />
                    <ValidationComponent
                            inputLength={this.state.inputLength}
                            value={this.state.stringOutput}/>
                    <p>Input's length: {this.state.inputLength}</p>
                    {this.stringToCharComponet(style)}
                </div>
            </div>
        );
    }
}

export default App;
