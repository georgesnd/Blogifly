import './App.css'
import Home from './components/Home'

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddPost from './components/AddPost'
import Login from './components/Login'
import Register from './components/Register'


function App() {

  return (
    <div className='App'>
         <Routes>
        <Route path='/home' exact element={<Home/>} />
        {/* <Route path='/profile' exact element={<Profile />}/> */}
        <Route path='/addpost' exact element={<AddPost />}/>
        <Route path= '/login' exact element={<Login />} />  
        <Route path= '/register' exact element={<Register/>} /> 
    </Routes> 
    </div>
  )  
}

export default App
