import React from 'react';

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

export default DataDisplay;
