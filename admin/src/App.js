import './App.css'
// import Home from './components/Home'

import React from 'react'
import { Route, Routes} from 'react-router-dom'
import AddPost from './components/AddPost'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import EditorPage from './components/EditorPage'
import Profile from './components/Profile'



function App() {

  return (
    <div className='App'>
         <Routes>
         <Route path= '/' exact element={<Login />} />  
         <Route path='/home'  element={<Home/>} /> 
        <Route path='/profile' exact element={<Profile />}/>
        <Route path='/addpost'  element={<AddPost />}/>
        {/* <Route path= '/login' exact element={<Login />} />   */}
        <Route path= '/register'  element={<Register/>} /> 
        <Route path= '/editor'  element={<EditorPage/>} /> 
    </Routes> 
    </div>
  )  
}

export default App
