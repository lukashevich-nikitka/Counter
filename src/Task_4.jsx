import React, { useState } from 'react';
import './App_Task4.css';
import { TextField, Button, Paper } from '@material-ui/core';

function FourthPage() {
  return (
    <Inputs />
  );
}

function Inputs() {
  const [loginState, setLoginState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  return (
    <div className="field-wrapper">
      <TextField
        label="Login"
        variant="outlined"
        size="small"
        onChange={(event) => setLoginState(event.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        size="small"
        onChange={(event) => setPasswordState(event.target.value)}
      />
      <Buttons login={loginState} password={passwordState} />
    </div>
  );
}

function Buttons(props) {
  const { login, password } = props;
  const [loginState, setLoginState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  return (
    <>
      <Button variant="outlined" size="large" color="primary" onClick={() => { setLoginState(login); setPasswordState(password); }}>
        Push
      </Button>
      <DisplayInputs login={loginState} password={passwordState} />
    </>
  );
}

function DisplayInputs(props) {
  const { login, password } = props;
  return (
    <>
      <Paper variant="outlined">
        Login:
        {' '}
        {login}
      </Paper>
      <Paper variant="outlined">
        Password:
        {' '}
        {password}
      </Paper>
    </>
  );
}

export default FourthPage;
