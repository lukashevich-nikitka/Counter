import './App_Task3.css';
import React, { useState } from 'react';

function ThirdPage() {
  return (
    <div className="verification-wrapper">
      <Inputs />
    </div>
  );
}

function Inputs() {
  const [loginState, setLoginState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  return (
    <>
      <div className="input-wrapper">
        <label htmlFor="log" className="label">Login:</label>
        <input id="log" onChange={(event) => setLoginState(event.target.value)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="pass" className="label">Password:</label>
        <input type="password" id="pass" onChange={(event) => setPasswordState(event.target.value)} />
      </div>
      <Button login={loginState} password={passwordState} />
    </>
  );
}

function Button(props) {
  const { login, password } = props;
  const [loginState, setLoginState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  return (
    <>
      <button type="submit" className="button" onClick={() => { setLoginState(login); setPasswordState(password); }}>Push</button>
      <DataDisplay login={loginState} password={passwordState} />
    </>
  );
}

function DataDisplay(props) {
  const { login, password } = props;
  return (
    <div className="data-wrapper">
      <div className="data">
        Login:
        {' '}
        {login}
      </div>
      <div className="data">
        Password:
        {' '}
        {password}
      </div>
    </div>
  );
}

export default ThirdPage;
