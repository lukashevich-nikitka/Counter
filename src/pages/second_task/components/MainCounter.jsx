import React from 'react';

function MainCounter(props) {
  const { value, addCounter, deleteCounter } = props;
  return (
    <div className="app">
      <div className="screen">{value}</div>
      <div className="buttons-area">
        <button type="submit" className="button" onClick={addCounter}>+</button>
        <button type="submit" className="button" onClick={deleteCounter}>-</button>
      </div>
    </div>
  );
}

export default MainCounter;
