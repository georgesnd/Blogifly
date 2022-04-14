import axios from 'axios'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AdminContext } from './context'
import {CgProfile} from 'react-icons/cg'
import logo from './images/logo.jpg'
import Footer from './Footer'
import {BsCameraFill} from 'react-icons/bs'
import '../components/Profile.css'
import {MdManageAccounts} from 'react-icons/md'
import {BsFillLockFill} from 'react-icons/bs'
import {MdPrivacyTip} from 'react-icons/md'
import {BiMessageEdit} from 'react-icons/bi'
import {IoMdNotifications} from 'react-icons/io'
import {ImImage} from 'react-icons/im'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {FaGreaterThan} from 'react-icons/fa'


export default function Profile(){

    const {adminData, setAdminData} = useContext(AdminContext)
    const [data, setData] = useState({
        age: 0,
        address: '',
    })

    const [fileUrl, setFileUrl] = useState('')
    const [blobFile, setBlobFile] = useState(null)

    useEffect(() => {

        setData({...data, ...adminData})
        setFileUrl(adminData.image)

    }, [])    

    const handleSave = async () => {

        console.log('data is ', data)

        const formdata = new FormData()

        //formdata.address = data.address 
        formdata.set('_id', adminData._id )

        Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

        // formdata.set('address', data.address )
        // formdata.set('email', data.email )
        // formdata.set('username', data.username )
        // formdata.set('age', data.age )

        if (blobFile) formdata.set('image', blobFile, 'profile_image') // add a file and a name

        const config = {

            headers: {'content-type': 'multipart/form-data'}
        }

        console.log('Handlesave: formdata is', formdata.keys())

        const response = await axios.patch('/admin/profile', formdata, config)

        console.log('response from profile is', response)

        if (response.data.success) setAdminData({...response.data.user})
    }

    const handleSaveCloudinary = async () => {

        console.log('data is ', data)

        const formdata = new FormData()

        //formdata.address = data.address 
        formdata.set('_id', adminData._id )

        Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

        // formdata.set('address', data.address )
        // formdata.set('email', data.email )
        // formdata.set('username', data.username )
        // formdata.set('age', data.age )

        if (blobFile) formdata.set('image', blobFile, 'profile_image') // add a file and a name

        const config = {

            headers: {'content-type': 'mulitpart/form-data'}
        }

        console.log('Handlesave: formdata is', formdata.keys())

        const response = await axios.patch('/admin/profilecloudinary', formdata, config)

        console.log('response from profile is', response)

        if (response.data.success) setAdminData({...response.data.user})
    }

    const handleSaveAws = async () => {

        console.log('data is ', data)

        const formdata = new FormData()

        //formdata.address = data.address 
        formdata.set('_id', adminData._id )

        Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

        // formdata.set('address', data.address )
        // formdata.set('email', data.email )
        // formdata.set('username', data.username )
        // formdata.set('age', data.age )

        if (blobFile) formdata.set('image', blobFile, 'profile_image') // add a file and a name

        const config = {

            headers: {'content-type': 'mulitpart/form-data'}
        }

        console.log('Handlesave: formdata is', formdata.keys())

        const response = await axios.patch('/users/profileaws', formdata, config)

        console.log('response from profile is', response)

        if (response.data.success) setAdminData({...response.data.user})
    }

    const handleImageChange = e => {

        console.log('File is', e.currentTarget.files[0])
        // console.log('File is', e.target.files[0]) 

        const file = e.currentTarget.files[0]

        setFileUrl(URL.createObjectURL(file)) // create a url from file user chose and update the state

        setBlobFile(e.currentTarget.files[0]) 
    }

    return <div>
      
        <div className='profTop' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
            <div className='profMenu'>
           <div><Link className='proflink' to='/home'>Blog posts</Link></div> 
           <div><Link className='proflink' to='/editor'>New Post</Link></div> 
           <div><Link className='proflink' to='/#'>Articles</Link></div> 
       
            </div>
            <img className='logoImgProf' src={logo} alt='pic'/> 
            
            <div className='adminNameProf' style={{display:'flex', alignItems:'center'}}>
                <h5> {adminData.username} </h5>
             
                 <span style={{paddingLeft: '10px', fontSize:'30px'}}><CgProfile/> </span>
             </div>
             </div>
    <div className='profBg'>
    <div className='profMain'>
    <div className='leftBlock'>
      <div>
           
            <img src={fileUrl} alt='' style={{height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%', marginLeft: '40%', marginBottom:'10px'}}/> <br/>
             <label htmlFor='file' style={{cursor: 'pointer', marginLeft:'48%',  padding:'10px 12px 0px 12px', backgroundColor:'#f7f2fb', border:'1px solid gray'}}><span style={{fontSize:'22px'}}><BsCameraFill/></span></label>
            <input accept='image/*' onChange={handleImageChange}  id='file' type='file' style={{visibility: 'hidden', cursor:'pointer'}}/>
        </div>
        <div className='leftLists'>
        <ul className='listIcons'>
            <li><MdManageAccounts/></li>
            <li><BsFillLockFill/></li>
            <li><MdPrivacyTip/></li>
            <li><BiMessageEdit/></li>
            <li><IoMdNotifications/></li>
            <li><ImImage/></li>
            <li><RiDeleteBin6Fill/></li>
        </ul>
        <ul className='listText'>
            <li>Account</li>
            <li>Change Password</li>
            <li>Privacy</li>
            <li>Messages</li>
            <li>Notifications</li>
            <li>My Photos</li>
            <li>Delete Admin</li>
        </ul>

        <ul className='listIcons' style={{marginLeft: '-40px'}}>
            <li><FaGreaterThan/></li>
            <li><FaGreaterThan/></li>
            <li><FaGreaterThan/></li>
            <li><FaGreaterThan/></li>
            <li><FaGreaterThan/></li>
            <li><FaGreaterThan/></li>
            <li><FaGreaterThan/></li>
        </ul>
        </div>
     </div>

        <div className='formProf'>
            <h4> <span ><MdManageAccounts style={{fontSize:'30px'}}/> </span>Admin</h4>
        <div><label>Email</label><br/><input readOnly value={adminData.email}/></div>
        <div><label>Username</label><br/><input readOnly value={adminData.username}/></div>
        <div><label>Age</label><br/><input type='number' value={data?.age} onChange={e=> setData({...data, age: e.target.value})}/></div>
        <div><label>Address</label><br/><input value={data?.address} onChange={e=> setData({...data, address: e.target.value})}/></div>
       <div> <button className='saveBT' onClick={handleSave}>Save profile</button> </div>
       </div>

       </div>
       </div> 
       {/* <div>
        <button onClick={handleSaveCloudinary}>Save profile to Cloudinary</button>
       </div>
       <div>
        <button onClick={handleSaveAws}>Save profile to AWS</button>
       </div> */}
       <Footer/>
    </div>
}