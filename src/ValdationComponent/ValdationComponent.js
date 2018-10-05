import React from 'react';

const validation = (props) => {
    if (props.inputLength < 5) {
        return (
            <div>
                <p>Text too short. Must be longer than 5 characters</p>
            </div>
        );
    }
    else {
        return ('');
    }
};

export default validation;