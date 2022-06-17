import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import DisplayInputs from './DisplayInputs';

function Buttons(props) {
  const { login, password } = props;
  const [loginState, setLoginState] = useState();
  const [passwordState, setPasswordState] = useState();
  const setDataStates = function () {
    setLoginState(login);
    setPasswordState(password);
  };
  return (
    <>
      <Button
        type="submit"
        variant="outlined"
        size="large"
        color="primary"
        onClick={() => { setDataStates(); }}
      >
        Push
      </Button>
      <DisplayInputs login={loginState} password={passwordState} />
    </>
  );
}

export default Buttons;
