import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import AdminProvider from './components/context';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
  <AdminProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </AdminProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

