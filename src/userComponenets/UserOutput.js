import React from 'react';
import '../App.css'

const userOutput = (props) => {
    return (
        <div className="box">
            <p>This is the 1st Assignment for udemy react of Maximilian</p>
            <p>The userName is: {props.userName}</p>
        </div>
    )
};

export default userOutput;