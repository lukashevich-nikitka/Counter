import React, { useState } from "react";
import './App_Task4.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';

function App() {
    return (
        <>
        <Inputs />
        </>
    )
}

function Inputs() {
    const [loginState, setLoginState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    return (
        <>
        <div className="field-wrapper">
        <TextField label="Login" variant="outlined" size="small"
        onChange = {(event) => setLoginState(event.target.value)} />
        <TextField label="Password" variant="outlined" size="small" 
        onChange = {(event) => setPasswordState(event.target.value)} />
        <Buttons login={loginState} password={passwordState}/>
        </div>
        </>
    )
}

function Buttons(props) {
    const [loginState, setLoginState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    return (
        <>
        <Button variant="outlined" size="large" color="primary" onClick={() => { setLoginState(props.login); setPasswordState(props.password); } }>
            Push
        </Button>
        <DisplayInputs login={loginState} password={passwordState}/>
        </>
    )
}

function DisplayInputs(props) {
    return (
        <>
        <Paper variant="outlined">Login: {props.login}</Paper>
        <Paper variant="outlined">Password: {props.password}</Paper>
        </>
    )
}

export default App;