// src/App.js

import React, { useState } from 'react';
import PrimarySearchAppBar from './SearchBar'; // Correct import for SearchBar
import data from './db.json';
import Flashcard from './Flashcard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = data.Data.nairobi.filter((item) =>
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      {/* Render the SearchBar component with necessary props */}
      <PrimarySearchAppBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      {/* Render the Flashcard component with searchResults data */}
      <Flashcard data={searchResults} />
    </div>
  );
}

export default App;
