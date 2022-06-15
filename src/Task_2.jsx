import './App.css';
import React, { useState } from 'react';

function SecondPage() {
  const [state, setState] = useState([]);
  const [idState, setId] = useState([{ id: -1 }]);
  return (
    <>
      <MainCounter
        addCounter={(el) => {
          setState([...state, el]);
          setId([...idState, { id: idState[idState.length - 1].id + 1 }]);
        }}
        deleteCounter={() => {
          setState([...state].splice(1, state.length - 1));
          setId([...idState].splice(1, idState.length - 1));
        }}
        value={state.length}
      />
      {state.map((_, index) => (
        <Counter
          key={idState[index].id}
          selfDelete={() => {
            const finArr = [...state]; finArr.splice(index, 1); setState(finArr);
            const finId = [...idState]; finId.splice(index, 1); setId(finId);
          }}
        />
      ))}
    </>
  );
}

function MainCounter(props) {
  const { value, addCounter, deleteCounter } = props;
  return (
    <div className="app">
      <MainScreen value={value} />
      <div className="buttons-area">
        <button type="submit" className="button" onClick={() => addCounter()}>+</button>
        <button type="submit" className="button" onClick={() => deleteCounter()}>-</button>
      </div>
    </div>
  );
}

function MainScreen(props) {
  const { value } = props;
  return <div className="screen">{value}</div>;
}

function Counter(props) {
  const [state, setState] = useState(0);
  const { selfDelete } = props;
  return (
    <div className="app">
      <Screen value={state} />
      <div className="buttons-area">
        <button type="submit" className="button" onClick={() => setState(state + 1)}>+</button>
        <button type="submit" className="button" onClick={() => setState(state - 1)}>-</button>
      </div>
      <button type="submit" className="delete-button" onClick={() => selfDelete()}>Delete</button>
    </div>
  );
}

function Screen(props) {
  const { value } = props;
  return <div className="screen">{value}</div>;
}

export default SecondPage;
