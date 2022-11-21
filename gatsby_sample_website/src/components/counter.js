import React, { useState, useEffect, useContext } from 'react';
import UserContext from './userContext';

const center = {
  textAlign: 'Center'
};

const btnStyle = {
  paddingRight: '20px',
  paddingLeft: '20px',
  background: 'rgba(146, 43, 225, 1)',
  backgroundRepeat: 'no-repeat'
};

const textStyle = {
  fontSize: '50px',
  padding: '20px',
  verticalAlign: 'Middle',
  color: 'black'
};

function Btn({ children, onClick }) {
  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}

function Counter() {
  const [counter, updateCounter] = useState(0);
  const [randomText, updaterandomText] = useState('Counter');

  function handleIncrement() {
    updateCounter(counter + 1);
  }

  function handleDecrement() {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  }

  function handleReset() {
    updateCounter(0);
    updaterandomText(`Counter`);
  }

  useEffect(() => {
    console.log('component lifecycle');
    // updaterandomText(`Random text is updated`);
  }, [counter, randomText]);
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div style={center}>
      <Btn onClick={handleDecrement}>-</Btn>
      <span style={textStyle}>{counter}</span>
      <Btn onClick={handleIncrement}>+</Btn>
      <div style={center}>
        <Btn onClick={handleReset}>Reset</Btn>
      </div>
      <br />
      <span style={{ padding: 10 }}>{randomText}</span>
      <br />
      <h1>Context API</h1>
      <span>{user.map((user) => user.name + ' ' + user.loggedin)}</span>
    </div>
  );
}

export default Counter;
