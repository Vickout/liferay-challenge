import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {  RepositoriesProvider } from './context/RepositoriesContext';

ReactDOM.render(
  <React.StrictMode>
    <RepositoriesProvider>
      <App />
    </RepositoriesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
