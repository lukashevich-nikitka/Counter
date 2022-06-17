import React, { useState } from 'react';
import Button from './Button';

function Inputs() {
  const [loginState, setLoginState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const setLogin = function (event) {
    setLoginState(event.target.value);
  };
  const setPassword = function (event) {
    setPasswordState(event.target.value);
  };
  return (
    <>
      <div className="input-wrapper">
        <label htmlFor="log" className="label">Login:</label>
        <input id="log" onChange={(event) => setLogin(event)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="pass" className="label">Password:</label>
        <input type="password" id="pass" onChange={(event) => setPassword(event)} />
      </div>
      <Button login={loginState} password={passwordState} />
    </>
  );
}

export default Inputs;
