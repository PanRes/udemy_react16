import React from 'react';

const userInput = (props) => {
    return (
        <div className="userInput">
            <p className="userInput">Enter userName: </p>
            <input className="userInput" type="text" onChange={props.changed} value={props.userName} />
        </div>
    )
};

export default userInput;