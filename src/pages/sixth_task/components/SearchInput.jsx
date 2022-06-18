import React from 'react';

function SearchInput(props) {
  const { getTown } = props;
  return (
    <input type="text" className="search-input" onChange={(event) => getTown(event)} />
  );
}

export default SearchInput;
