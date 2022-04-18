import './App.css'
import React from 'react'
import { Route, Routes} from 'react-router-dom'
import AddPost from './components/AddPost'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import ChangePass from './components/ChangePass'
import EmailConfirm from './components/EmailConfirm'
import Profile from './components/Profile' 
import EditorPage from './components/EditorPage'


function App() {

  return (
    <div className='App'>
    <Routes>
         <Route path= '/' exact element={<Login />} />  
         <Route path='/home'  element={<Home/>} /> 
        <Route path='/profile' exact element={<Profile />}/>
        <Route path='/addpost'  element={<AddPost />}/>
        <Route path= '/login' exact element={<Login />} /> 
        <Route path= '/register'  element={<Register/>} /> 
        <Route path= '/confirm'  element={<EmailConfirm />} />
        <Route path= '/change'  element={<ChangePass />} />
        <Route path= '/editor'  element={<EditorPage/>} /> 
    </Routes> 
    </div>
  )  
}

export default App
