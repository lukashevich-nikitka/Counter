import './App.css';
import React, {useState} from 'react';


function App() {
  const [state, setState] = useState([])
  return <> 
  <MainCounter  addCounter = {(el) => setState([...state, el])} 
  deleteCounter = {() => setState([...state].splice(1,state.length-1))}
  value = {state.length}/>
  {state.map((_, index) => <Counter key={index}/>)}
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

function Counter() {
  const [state, setState] = useState(0)
  return (
    <>
    <div className='app'>
      <Screen value = {state}/>
      <div className='buttons-area'>
        <button className='button' onClick={() => setState(state + 1 )}>+</button>
        <button className='button' onClick={() => setState(state - 1)}>-</button>
      </div>
    </div>
    </>
  )
}

function Screen(props) {
  return <div className='screen'>{props.value}</div>
}

export default App;