import React, { useState } from 'react';

const SearchBar = ({ onSearch, searchQuery }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar-input"
        placeholder={isFocused ? '' : 'หาที่เที่ยวแล้วไปกัน...'}
        value={searchQuery}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default SearchBar;