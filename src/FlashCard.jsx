import React, { useState, useEffect } from 'react';
import dbData from './db.json';

const FlashCard = () => {
  // Use dbData directly as the initial data
  const [data, setData] = useState(dbData.Data.nairobi);

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    // Filter the data based on the search input
    const filteredData = dbData.Data.nairobi.filter((item) => {
      const lowercaseSearchInput = searchInput.toLowerCase();
      const lowercaseDesc = item.desc.toLowerCase();
      return lowercaseDesc.includes(lowercaseSearchInput);
    });

    setData(filteredData);
  }, [searchInput]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for houses..."
        value={searchInput}
        onChange={handleSearchChange}
      />
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.type}</h3>
          <p>{item.desc}</p>
          <p>Price: {item.price}</p>
          <img src={item.image} alt={item.type} />
        </div>
      ))}
    </div>
  );
};

export default FlashCard;
