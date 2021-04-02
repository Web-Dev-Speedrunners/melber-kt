import React, { useState } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

const SearchInput = ({ placeholder, onSearch }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      onSearch(value);
    }
  };

  return (
    <Input
      value={value}
      onKeyDown={keyPress}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
