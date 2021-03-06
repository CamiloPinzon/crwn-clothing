import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import { store } from './store/store';
import App from './App';

import './index.scss';
const IndexApp = () => {
  return(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<IndexApp />);