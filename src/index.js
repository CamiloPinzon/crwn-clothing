import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import App from './App';

import './index.scss';
const IndexApp = () => {
  return(
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
  </React.StrictMode>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<IndexApp />);