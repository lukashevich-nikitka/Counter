import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Buttons from './Buttons';

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
    <div className="field-wrapper">
      <TextField
        label="Login"
        variant="outlined"
        size="small"
        onChange={(event) => { setLogin(event); }}
      />
      <TextField
        label="Password"
        variant="outlined"
        size="small"
        onChange={(event) => { setPassword(event); }}
      />
      <Buttons login={loginState} password={passwordState} />
    </div>
  );
}

export default Inputs;
