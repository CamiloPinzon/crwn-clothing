import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';

const IndexApp = () => {
  return(
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<IndexApp />);