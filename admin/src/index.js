import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './components/context';
import App from './App';

 

ReactDOM.render( 
  <React.StrictMode>
  <UserProvider>
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </UserProvider>
  </React.StrictMode>, 
  document.getElementById('root')
);
