// App.js
import React, { useState } from 'react';
import axios from 'axios';
import FlashCard from './FlashCard';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [flashcardData, setFlashcardData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?term=${searchTerm}`);
      const data = response.data;
      if (data.length > 0) {
        setFlashcardData(data[0]); // Assuming the server returns an array of data and we're using only the first item as the flashcard data.
      } else {
        setFlashcardData(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {flashcardData && <FlashCard data={flashcardData} />}
    </div>
  );
};

export default App;
