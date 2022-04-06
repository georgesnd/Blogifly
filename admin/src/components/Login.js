import {useState} from 'react'
import axios from 'axios'
import './Login.scss'; 
import {useNavigate} from 'react-router-dom'; 
import { useContext } from 'react';
import { UserContext} from './context' ;
import Logo from './images/logo.jpg'

export default function Login() {
    const navigate =useNavigate()
const {setUserData} = useContext(UserContext) 

    const [data, setData] = useState({
        email: '',
        pass: ''
    }) 

    const handleClick = async e => {

        e.preventDefault();
        const response = await axios.post('/admin/login', data)  
        console.log('reponse is ', response)

        if(response.data.success===true) 
        {setUserData(response.data.user)
             navigate('/home') }  
    }

    return (
      <div className="login">
      <div className="container">
      <div className="logo">
      <img src={Logo} alt="" /> 
    </div>  
        <article className="sign-up">
          <h1 className="sign-up__title">Welcome back!</h1>
          <p className="sign-up__subtitle">
            Sign in to your account to continue
          </p>
          <form
            // onSubmit={handleClick}
            className="sign-up-form form"
            action=""
            method=""
          >
            <label className="form-label-wrapper">
              <p className="form-label">Email</p>
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="form-input"
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>
            <label className="form-label-wrapper">
              <p className="form-label">Password</p>
              <input
                value={data.pass}
                onChange={(e) => setData({ ...data, pass: e.target.value })}
                className="form-input"
                type="password"
                placeholder="Enter your password"
                required
              />
            </label>
            <a className="link-info forget-link" href="##">
              Forgot your password?
            </a>
            <label className="form-checkbox-wrapper">
              <input className="form-checkbox" type="checkbox" />
              <span className="form-checkbox-label">Remember me next time</span>
            </label>
            <button className="form-btn primary-default-btn transparent-btn" onClick={handleClick}>
              Sign in
            </button>
          </form>
        </article>
      </div>
      </div> 
    );
} 