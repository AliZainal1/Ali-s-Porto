// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css'; 
import App from './App'; 
import { BrowserRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Pastikan BrowserRouter hanya ada di sini */}
      <App /> {/* Komponen App dimuat di sini */}
    </BrowserRouter>
  </React.StrictMode>
);
