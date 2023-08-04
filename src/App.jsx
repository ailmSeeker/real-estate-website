// App.js
import React, { useState, useEffect } from 'react';
import './index.css';
import CardSection from './Components/CardSection';
import FooterSection from './Components/FooterSection';
import { Outlet, useNavigate } from 'react-router-dom';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const [property, setProperty] = useState([]);
  const [originalProperty, setOriginalProperty] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then((data) => {
        setProperty(data);
        setOriginalProperty(data);
      });
  }, []);

  const handleSearch = () => {
    // Filter properties based on search criteria
    const filteredProperty = originalProperty.filter((item) => {
      const typeMatch = !propertyType || item.propertyType === propertyType;
      const locationMatch = !location || (item.location && item.location.includes(location));
      const minPriceValue = parseInt(minPrice.replace(/[^0-9]/g, '')); // Convert "Ksh 19,000,000" to 19000000
      const maxPriceValue = parseInt(maxPrice.replace(/[^0-9]/g, '')); // Convert "Ksh 19,000,000" to 19000000
      const priceValue = parseInt(item.price.replace(/[^0-9]/g, '')); // Convert "Ksh 19,000,000" to 19000000
      const priceMatch = (!minPriceValue || priceValue >= minPriceValue) && (!maxPriceValue || priceValue <= maxPriceValue);
      const searchTermMatch =
        !searchTerm ||
        (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));

      return typeMatch && locationMatch && priceMatch && searchTermMatch;
   
    });

    // if user doesn't have any search item
    if (searchTerm === "") {
      setProperty(originalProperty); // Reset the property list to the original list
    } else {
      setProperty(filteredProperty);
    }
  };

  const generatePriceOptions = () => {
    const minKsh = 5000000;
    const maxKsh = 300000000;
    const increment = 5000000;
    const options = [];
    for (let price = minKsh; price <= maxKsh; price += increment) {
      options.push(
        <option key={price} value={price}>
          {`Ksh ${price.toLocaleString()}`}
        </option>
      );
    }
    return options;
  };

  const navigate = useNavigate();
  const handleClick = (property_id) => {
    // console.log(property_id)
    navigate(`/buyProperty/${property_id}`);
  };

  return (
    <div className="flex justify-between items-left bg-[#2f4f4f] h-fit  flex-col">
      <header className="App-header width-full bg-[#eff0f1] p-10 rounded mb-5 baseline flex-wrap items-baseline justify-baseline">
        <div className="flex items-center mb-4">
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 3.17288L3.15054 12.0222C2.76884 12.4039 2.5 12.967 2.5 13.5612V19C2.5 19.8284 3.17157 20.5 3.99999 20.5H7.49999C7.77614 20.5 7.99999 20.2761 7.99999 20V15.5C7.99999 15.2239 8.22384 15 8.49999 15H15.5C15.7761 15 16 15.2239 16 15.5V20C16 20.2761 16.2238 20.5 16.5 20.5H20C20.8284 20.5 21.5 19.8284 21.5 19V13.5612C21.5 12.9669 21.2311 12.4038 20.8495 12.0222L11.9999 3.17288ZM12 4.47803L19.1036 11.5816C19.4723 11.9503 19.5001 12.5349 19.1865 12.8936L19.1036 12.9683L12.9685 19.1034C12.8952 19.1768 12.8022 19.2141 12.7031 19.2088C12.6041 19.2034 12.5141 19.1566 12.4464 19.0743L12.3621 18.9687L12.2662 18.8627L12 18.5985L11.7337 18.8626L11.6377 18.9686L11.5534 19.0742C11.4857 19.1566 11.3958 19.2034 11.2968 19.2087C11.1978 19.214 11.1048 19.1767 11.0314 19.1033L4.89628 12.9683L4.81337 12.8936C4.49975 12.5349 4.52755 11.9503 4.89628 11.5816L11.9999 4.47803ZM17.5002 14.0002H6.49973L11.9999 8.50002L17.5002 14.0002Z"
              fill="#036df7"
            />
          </svg>
          <h1 className="text-3xl font-bold text-[#1a3d86]">Homes 254</h1>

        </div>
        <div className="search-bar baseline justify-baseline items-baseline bg-[#e3eeee] p-4 rounded-md">
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="h-10 px-6 font-semibold rounded-md border border-slate-400 text-slate-700 mr-2"
          >
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>


          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-700"
          >
            <option value="">Location</option>
            <option value="Nairobi,CBD">Nairobi CBD</option>
            <option value="Nairobi,West">Nairobi West</option>
            <option value="Nairobi,Nairobi">Nairobi Nairobi</option>
            <option value="Nairobi Province">Nairobi Province</option>
          </select>
          <select
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-700"
          >
            <option value="">Min Price</option>
            {generatePriceOptions()}
          </select>

          <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-700"
          >
            <option value="">Max Price</option>
            {generatePriceOptions()}
          </select>

          <input
            class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-700"
            type="text"
            placeholder="Search for Province,Suburb..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />


          <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" onClick={handleSearch}>Search</button>

        </div>
      </header>

      <section className="bg-homepage-color p-4">
        <h2 className="text-2xl font-bold text-left mb-4 text-white">Properties</h2>
        <div className="flex gap-4 flex-wrap">
          {property.map((item) => (
            <CardSection
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              description={item.description}
              handleClick={() => handleClick(item.id)} // Pass the handleClick function as a prop
            />
          ))}
        </div>
      </section>

      {/* Use the Outlet to render nested routes */}
      <Outlet />

      {/* ... Your other sections ... */}
      <FooterSection />
    </div>
  );
};

export default App;
