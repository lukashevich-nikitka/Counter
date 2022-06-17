import React, { useState } from 'react';
import DataDisplay from './DataDisplay';

function Button(props) {
  const { login, password } = props;
  const [loginState, setLoginState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const setDataStates = function () {
    setLoginState(login);
    setPasswordState(password);
  };
  return (
    <>
      <button type="submit" className="button" onClick={() => { setDataStates(); }}>Push</button>
      <DataDisplay login={loginState} password={passwordState} />
    </>
  );
}

export default Button;
