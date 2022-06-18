/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function SearchWeatherButton(props) {
  const { getData } = props;
  return (
    <button type="submit" onClick={() => getData()}>Search</button>
  );
}

export default SearchWeatherButton;
