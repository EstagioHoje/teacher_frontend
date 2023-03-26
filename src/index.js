import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './mainPage/App';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);