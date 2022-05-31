import './App.css';
import React, {useState} from 'react';


function App() {
  const [state, setState] = useState([])
  const [idState, setId] = useState([{id: -1}])
  return <> 
  <MainCounter  addCounter = {(el) => {setState([...state, el]); setId([...idState, {id: idState[idState.length-1].id + 1}])}} 
  deleteCounter = {() => {setState([...state].splice(1,state.length-1)); setId([...idState].splice(1,idState.length-1))}}
  value = {state.length}/>
  {state.map((_, index) => <Counter key={idState[index].id} selfDelete = {() => {let finArr = [...state]; finArr.splice(index, 1); setState(finArr);
  let finId = [...idState]; finId.splice(index, 1); setId(finId)}}/>)}
  </>
}

function MainCounter(props) {
    return (
        <>
    <div className='app'>
      <MainScreen value = {props.value}/>
      <div className='buttons-area'>
        <button className='button' onClick={() => props.addCounter()}>+</button>
        <button className='button' onClick={() => props.deleteCounter()}>-</button>
      </div>
    </div>
    </>
    )
}

function MainScreen(props) {
    return <div className='screen'>{props.value}</div>
  }

function Counter(props) {
  const [state, setState] = useState(0)
  return (
    <>
    <div className='app'>
      <Screen value = {state}/>
      <div className='buttons-area'>
        <button className='button' onClick={() => setState(state + 1 )}>+</button>
        <button className='button' onClick={() => setState(state - 1)}>-</button>
      </div>
      <button className='delete-button' onClick={() => props.selfDelete()}>Delete</button>
    </div>
    </>
  )
}

function Screen(props) {
  return <div className='screen'>{props.value}</div>
}

// export default App;