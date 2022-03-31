// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { useContext } from 'react'
// import {Link} from 'react-router-dom'
// import { UserContext } from './context'

// export default function Profile(){

//     const {userData, setUserData} = useContext(UserContext)
//     const [data, setData] = useState({
//         age: 0,
//         address: '',
//     })

//     const [fileUrl, setFileUrl] = useState('')
//     const [blobFile, setBlobFile] = useState(null)

//     useEffect(() => {

//         setData({...data, ...userData})
//         setFileUrl(userData.image)

//     }, [])    

//     const handleSave = async () => {

//         console.log('data is ', data)

//         const formdata = new FormData()

//         //formdata.address = data.address 
//         formdata.set('_id', userData._id )

//         Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

//         // formdata.set('address', data.address )
//         // formdata.set('email', data.email )
//         // formdata.set('username', data.username )
//         // formdata.set('age', data.age )

//         if (blobFile) formdata.set('image', blobFile, 'profile_image') // add a file and a name

//         const config = {

//             headers: {'content-type': 'mulitpart/form-data'}
//         }

//         console.log('Handlesave: formdata is', formdata.keys())

//         const response = await axios.patch('/users/profile', formdata, config)

//         console.log('response from profile is', response)

//         if (response.data.success) setUserData({...response.data.user})
//     }

//     const handleSaveCloudinary = async () => {

//         console.log('data is ', data)

//         const formdata = new FormData()

//         //formdata.address = data.address 
//         formdata.set('_id', userData._id )

//         Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

//         // formdata.set('address', data.address )
//         // formdata.set('email', data.email )
//         // formdata.set('username', data.username )
//         // formdata.set('age', data.age )

//         if (blobFile) formdata.set('image', blobFile, 'profile_image') // add a file and a name

//         const config = {

//             headers: {'content-type': 'mulitpart/form-data'}
//         }

//         console.log('Handlesave: formdata is', formdata.keys())

//         const response = await axios.patch('/users/profilecloudinary', formdata, config)

//         console.log('response from profile is', response)

//         if (response.data.success) setUserData({...response.data.user})
//     }

//     const handleSaveAws = async () => {

//         console.log('data is ', data)

//         const formdata = new FormData()

//         //formdata.address = data.address 
//         formdata.set('_id', userData._id )

//         Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

//         // formdata.set('address', data.address )
//         // formdata.set('email', data.email )
//         // formdata.set('username', data.username )
//         // formdata.set('age', data.age )

//         if (blobFile) formdata.set('image', blobFile, 'profile_image') // add a file and a name

//         const config = {

//             headers: {'content-type': 'mulitpart/form-data'}
//         }

//         console.log('Handlesave: formdata is', formdata.keys())

//         const response = await axios.patch('/users/profileaws', formdata, config)

//         console.log('response from profile is', response)

//         if (response.data.success) setUserData({...response.data.user})
//     }

//     const handleImageChange = e => {

//         console.log('File is', e.currentTarget.files[0])
//         // console.log('File is', e.target.files[0]) 

//         const file = e.currentTarget.files[0]

//         setFileUrl(URL.createObjectURL(file)) // create a url from file user chose and update the state

//         setBlobFile(e.currentTarget.files[0]) 
//     }

//     return <div>
//         <p><Link to='/home'>Home</Link></p>

//         <div><label>email</label><input readOnly value={userData.email}/></div>
//         <div><label>username</label><input readOnly value={userData.username}/></div>
//         <div><label>age</label><input type='number' value={data?.age} onChange={e=> setData({...data, age: e.target.value})}/></div>
//         <div><label>address</label><input value={data?.address} onChange={e=> setData({...data, address: e.target.value})}/></div>
        
//         <div>
//             <label htmlFor='file' style={{cursor: 'pointer'}}>Select your profile image</label>
//             <img src={fileUrl} alt='' style={{height: '300px', width: '300px', objectFit: 'cover'}}/>
//             <input accept='image/*' onChange={handleImageChange}  id='file' type='file' style={{visibility: 'hidden'}}/>
//         </div>
//        <div>

//         <button onClick={handleSave}>Save profile</button>
//        </div>
//        <div>
//         <button onClick={handleSaveCloudinary}>Save profile to Cloudinary</button>
//        </div>
//        <div>
//         <button onClick={handleSaveAws}>Save profile to AWS</button>
//        </div>
//     </div>
// }