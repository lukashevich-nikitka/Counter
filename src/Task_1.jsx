import './App.css';
import React, { useState } from 'react';

function FirstPage() {
  return (
    <Counter />
  );
}

function Counter() {
  const [state, setState] = useState(0);
  return (
    <div className="app">
      <Screen value={state} />
      <div className="buttons-area">
        <button type="submit" className="button" onClick={() => setState(state + 1)}>+</button>
        <button type="submit" className="button" onClick={() => setState(state - 1)}>-</button>
      </div>
    </div>
  );
}

function Screen(props) {
  const { value } = props;
  return <div className="screen">{value}</div>;
}

export default FirstPage;
