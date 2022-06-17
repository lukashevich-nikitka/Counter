import React from 'react';
import { Paper } from '@material-ui/core';

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

export default DisplayInputs;
