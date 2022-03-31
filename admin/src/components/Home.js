import logo from './images/logo.jpg'
import {CgProfile} from 'react-icons/cg'
import {Dropdown, DropdownButton} from 'react-bootstrap'
// import AddPost from './AddPost'
import '../stylesAdmin/admin.css'


function Home() {

  return (
    <div className='adminHomeContainer'>

        <div className='dashBoardContainer'>
        
        <div className='adminTop'>
         < img className='logoImg' src={logo} alt='pic'/> 
         <div className='adminName' >
        <h5> Admin Name  <span><CgProfile/></span></h5>
        
        </div>

        </div>

        
            <h1>Blog Dashboard</h1>
          <div className='adminBody'>  
          <div className='sidecat'>
            <ul>
                <li>BlogPost</li>
                <li>Add new post</li>
                <li></li>
            </ul> 
            <br/>
              <ul className='category'>
                <li className='topCate'>CATEGORY</li>
                <li>Travel</li>
                <li>Music</li>
                <li>Politics</li>
                <li>Movies</li>
                <li>Books</li>
                <li>Food</li>
                <li>Lifestyle</li>
                <li>Makeup</li>
              </ul>
            
            </div>
           <div className='editor'></div>
       
        </div>

        </div>
       
        
    </div>
  )
}

export default Home