import React from 'react';

function Screen(props) {
  const { value } = props;
  return <div className="screen">{value}</div>;
}

export default Screen;
