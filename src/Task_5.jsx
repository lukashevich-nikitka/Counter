/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import './App_Task4.css';
import { TextField, Button, Paper } from '@material-ui/core';

import { useForm } from 'react-hook-form';

function FivethPage() {
  return (
    <Inputs />
  );
}

function Inputs() {
  const [loginState, setLoginState] = useState();
  const [passwordState, setPasswordState] = useState();
  const { register, handleSubmit } = useForm('');
  const onSubmit = (data) => {
    setLoginState(JSON.stringify(data.Login));
    setPasswordState(JSON.stringify(data.Password));
  };
  return (
    <form className="field-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <TextField type="email" label="Email" variant="outlined" size="small" {...register('Login')} />
      <TextField label="Password" variant="outlined" size="small" {...register('Password')} />
      <Buttons login={loginState} password={passwordState} />
    </form>
  );
}

function Buttons(props) {
  const { login, password } = props;
  const [loginState, setLoginState] = useState();
  const [passwordState, setPasswordState] = useState();
  return (
    <>
      <Button
        type="submit"
        variant="outlined"
        size="large"
        color="primary"
        onClick={() => {
          setLoginState(login);
          setPasswordState(password);
        }}
      >
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

export default FivethPage;
