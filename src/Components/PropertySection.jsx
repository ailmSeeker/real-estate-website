import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PropertySection = () => {
  const { property_id } = useParams();
  const navigate = useNavigate();

  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    // Fetch the property details for the given property_id
    fetch(`http://localhost:3000/data/${property_id}`)
      .then((response) => response.json())
      .then((data) => setSelectedProperty(data))
      .catch(() => setSelectedProperty(null)); // Handle error case
  }, [property_id]);

  const handleBuyNow = (id) => {
    navigate(`/buyProperty/${property_id}/checkout`);
  };

  if (!selectedProperty) {
    // Handle case when property with the given id is not found or during loading
    return <div>Loading...</div>;
  }

  return (
    <div className="justify-center text-center w-screen">
      <div className="w-screen">
        <img
          className="w-[100%]"
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <h2>{selectedProperty.price}</h2>
        <h3>{selectedProperty.title}</h3>
        <p>{selectedProperty.description}</p>
      </div>
      <div className="flex">
        <p></p>
      </div>
      <button className="bg-slate-800 text-white p-3 rounded" onClick={() =>handleBuyNow(property_id)}>
        BUY NOW
      </button>
    </div>
  );
};

export default PropertySection;
