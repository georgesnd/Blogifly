import {useState} from 'react'
import axios from 'axios'

export default function Login() {

    const [data, setData] = useState({
        username: '',
        email: '',
        pass: ''
    })

    const handleClick = async e => {

        e.preventDefault();

        const response = await axios.post('/admin/login', data)  

        console.log('reponse is ', response)
    }

    return <div className='container'>
        <form onSubmit={handleClick}>
            <input placeholder='Type your email' type="text" value={data.email} onChange={e => setData({...data, email: e.target.value}) }/>
            <br/>
            <input placeholder='Type your username' type="text" value={data.username} onChange={e => setData({...data, username: e.target.value}) }/>
            <br/>
            <input placeholder='Type your passoword' type="text" value={data.pass} onChange={e => setData({...data, pass: e.target.value}) }/>
            <br/>
            <input type='submit' value='Login' onClick={handleClick}/>
        </form>
    </div>
}