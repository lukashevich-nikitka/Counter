import React, { useState } from 'react';
import Screen from '../../../common/components/Screen';

function Counter() {
  const [state, setState] = useState(0);
  const increase = function () {
    setState(state + 1);
  };
  const decrease = function () {
    setState(state - 1);
  };
  return (
    <div className="app">
      <Screen value={state} />
      <div className="buttons-area">
        <button type="submit" className="button" onClick={() => { increase(); }}>+</button>
        <button type="submit" className="button" onClick={() => { decrease(); }}>-</button>
      </div>
    </div>
  );
}

export default Counter;
