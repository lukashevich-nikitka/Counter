import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Buttons from './Buttons';

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

export default Inputs;
