import {useState} from 'react'
import axios from 'axios'
import './Login.css'; 
import {useNavigate} from 'react-router-dom'; 
import { useContext } from 'react';
import { UserContext} from './context' 

export default function Register() {
    const navigate =useNavigate()
const {setUserData} = useContext(UserContext) 

    const [data, setData] = useState({
        username: '',
        email: '',
        pass: ''
    }) 

    const handleClick = async e => {

        e.preventDefault();
        const response = await axios.post('/admin/register', data)  
        console.log('reponse is ', response)

        if(response.data.success===true) 
        {setUserData(response.data.user)
             navigate('/home') }  
    }

    return <div className='container'>
     <article className="sign-up">
    <h1 className="sign-up__title">Get started</h1>
    <p className="sign-up__subtitle">Start creating the best possible user experience for you customers</p>
    <form onSubmit={handleClick} className="sign-up-form form" action="" method="">
    <label className="form-label-wrapper">
        <p className="form-label">Admin Name</p>
        <input value={data.username} onChange={e=> setData({...data, username:e.target.value})} className="form-input" type="text" placeholder="Enter your name" required />
      </label> 

      <label className="form-label-wrapper">
        <p className="form-label">Email</p>
        <input value={data.email} onChange={e=> setData({...data, email:e.target.value})} className="form-input" type="email" placeholder="Enter your email" required />
      </label>  
      <label className="form-label-wrapper">
        <p className="form-label">Password</p>
        <input value={data.pass} onChange={e=> setData({...data, pass:e.target.value})} className="form-input" type="password" placeholder="Enter your password" required/>
      </label>
      <a className="link-info forget-link" href="##">Forgot your password?</a>
      <label className="form-checkbox-wrapper">  
        <input className="form-checkbox" type="checkbox" />
        <span className="form-checkbox-label">Remember me next time</span>
      </label>
      <button className="form-btn primary-default-btn transparent-btn">Sign up</button> 
    </form>
  </article>
    </div>
} 