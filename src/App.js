import React, { Component } from 'react';
import './App.css';
import UserOutput from './userComponenets/UserOutput';
import UserInput from './userComponenets/UserInput';

class App extends Component {

    state = {
        userName: "PR"
    }

    userNameChangedHandler = (event) => {
        this.setState({userName:event.target.value})
    }

    render() {

        return (
            <div>
                <UserInput
                    userName={this.state.userName}
                    changed={this.userNameChangedHandler}/>
                <UserOutput
                    userName={this.state.userName}/>
                <UserOutput
                    userName={this.state.userName}/>
                <UserOutput
                    userName="McCoy"/>
            </div>
        );
    }
}

export default App;
