import React from 'react';

function SearchInput(props) {
  const { getTown } = props;
  return (
    <input type="text" className="search-input" onChange={getTown} />
  );
}

export default SearchInput;
