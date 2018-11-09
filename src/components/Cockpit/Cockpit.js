import React from 'react';
import classes from './Cockpit.css';



const cockpit = (props) => {
  let simpleText = 'Now it is working!';

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
    simpleText = 'Congrats on yur killing!'
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
    if (props.persons.length == 1) {
      simpleText = 'Stop! You gonna kill them all'
    }
    else {
      simpleText = 'Now you did it, Everyone is dead!'
    }
  }



  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>{simpleText}</p>
      <button
        className={btnClass}
        onClick={props.click}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;