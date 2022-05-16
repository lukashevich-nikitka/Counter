import './App.css';
import React, {useState} from 'react';


function App() {
  return <> 
  <Counter />
  </>
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
