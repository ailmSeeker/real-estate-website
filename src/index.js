import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import LoginSection from './Components/LoginSection';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={  <App />}></Route>
  <Route path="/login" element={  <LoginSection />}></Route>
    </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
)