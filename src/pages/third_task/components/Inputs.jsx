import React, { useState } from 'react';
import Button from './Button';

function Inputs() {
  const [loginState, setLoginState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const setLogin = (event) => setLoginState(event.target.value);
  const setPassword = (event) => setPasswordState(event.target.value);
  return (
    <>
      <div className="input-wrapper">
        <label htmlFor="log" className="label">Login:</label>
        <input id="log" onChange={setLogin} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="pass" className="label">Password:</label>
        <input type="password" id="pass" onChange={setPassword} />
      </div>
      <Button login={loginState} password={passwordState} />
    </>
  );
}

export default Inputs;
