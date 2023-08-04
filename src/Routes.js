// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PropertySection from './Components/PropertySection';
import App from './App';
import LoginSection from './Components/LoginSection';
import Checkout from './Components/Checkout';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/login' element={<LoginSection />} />
      <Route path="/buyProperty/:property_id" element={<PropertySection />} />
      <Route path="/Property/:property_id/Checkout" element={<Checkout />} />
      <Route path="/buyProperty/:property_id/Checkout" element={<Checkout />} />
    </Routes>
  );
};

export default MainRoutes;