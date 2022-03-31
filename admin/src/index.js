import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserProvider from './components/context';
import App from './App';
import Home from './components/Home'
 import Profile from './components/Profile'
 import AddPost from "./components/AddPost";
 import Login from './components/Login'; 
import Register from './components/Register'; 
 

ReactDOM.render( 
  <React.StrictMode>
  <UserProvider>
    <BrowserRouter>
    <Routes>
        <Route path='/home' exact element={<Home/>} />
        <Route path='/profile' exact element={<Profile />}/>
        <Route path='/addpost' exact element={<AddPost />}/>
        <Route path= '/login' exact element={<Login />} />  
        <Route path= '/register' exact element={<Register/>} /> 
    </Routes>
    
      <App/>
    </BrowserRouter>
  </UserProvider>
  </React.StrictMode>, 
  document.getElementById('root')
);
