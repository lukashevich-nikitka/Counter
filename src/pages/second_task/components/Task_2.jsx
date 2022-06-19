import '../../../styles/App.css';
import React, { useState } from 'react';
import MainCounter from './MainCounter';
import Counter from './Counter';

function SecondPage() {
  const [state, setState] = useState([]);
  const [idState, setId] = useState([{ id: -1 }]);
  const addCounter = function (el) {
    setState([...state, el]);
    setId([...idState, { id: idState[idState.length - 1].id + 1 }]);
  };
  const deleteCounter = function () {
    setState([...state].splice(1, state.length - 1));
    setId([...idState].splice(1, idState.length - 1));
  };
  const selfDelete = function (index) {
    const finArr = [...state]; finArr.splice(index, 1); setState(finArr);
    const finId = [...idState]; finId.splice(index, 1); setId(finId);
  };
  return (
    <>
      <MainCounter
        addCounter={() => { addCounter(); }}
        deleteCounter={() => { deleteCounter(); }}
        value={state.length}
      />
      {state.map((_, index) => (
        <Counter
          key={idState[index].id}
          selfDelete={() => { selfDelete(index); }}
        />
      ))}
    </>
  );
}

export default SecondPage;
