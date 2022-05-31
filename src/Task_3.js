import './App_Task3.css';
import React, {useState} from 'react';

function App() {
    return (
        <div className='verification-wrapper'>
            <Inputs />
        </div>
    )
}

function Inputs() {
    const [loginState, setLoginState] = useState('');
    const [passwordState, setPasswordState] = useState('');
    return (
        <>
        <div className='input-wrapper'>
            <label for='log' className='label'>Login:</label>
            <input id='log' onChange={(event) => setLoginState(event.target.value)}></input>
        </div>
        <div className='input-wrapper'>
            <label for='pass' className='label'>Password:</label>
            <input type='password' id='pass' onChange={(event) => setPasswordState(event.target.value)}></input>
        </div>
        <Button login = {loginState} password = {passwordState}/>
        </>
    )
}

function Button(props) {
    const [loginState, setLoginState] = useState('');
    const [passwordState, setPasswordState] = useState('');
    return (
        <>
        <button className='button' onClick={() => {setLoginState(props.login); setPasswordState(props.password)}}>Push</button>
        <DataDisplay login={loginState} password={passwordState}/>
        </>
    )
}

function DataDisplay(props) {
    return (
        <div className='data-wrapper'>
            <div className='data'>Login: {props.login}</div>
            <div className='data'>Password: {props.password}</div>
        </div>
    )
}

export default App;