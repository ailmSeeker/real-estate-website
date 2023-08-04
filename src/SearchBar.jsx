// src/SearchBar.jsx

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchQuery}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          style={{ paddingLeft: '30px' }}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
