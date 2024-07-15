import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ECommersApp } from './ECommersApp';
import './index.css';
import { CartProvider } from './context/ContextCart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ECommersApp />
        <ToastContainer />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)