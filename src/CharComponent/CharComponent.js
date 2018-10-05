import React from 'react';

const character = (props) => {
    return (
        <div style={props.cssStyle} onClick={props.clicked}>
            {props.character}
        </div>
    )
};

export default character;