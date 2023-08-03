// FlashCard.js
import React from 'react';

const FlashCard = ({ title, price, location, description }) => {
  return (
    <div className="flashcard">
      <h2>{title}</h2>
      <p>Price: {price}</p>
      <p>Location: {location}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default FlashCard;
