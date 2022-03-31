import logo from './images/logo.jpg'
import {CgProfile} from 'react-icons/cg'
import {Dropdown, DropdownButton} from 'react-bootstrap'
// import AddPost from './AddPost'
import '../stylesAdmin/admin.css'
import DropDown from './DropDown'
import {AiOutlineHome} from 'react-icons/ai'
import {FiEdit, FiMusic} from 'react-icons/fi' 
import {FaRegHandshake} from 'react-icons/fa'
import {GiAirplaneDeparture, GiEyelashes} from 'react-icons/gi'
import {BiMoviePlay, BiBook} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import {MdOutlineFastfood} from 'react-icons/md'



function Home() {

  return (
    <div className='adminHomeContainer'>
          <div className='sidecat'>
             <h1>Blog Dashboard</h1>
            <ul className='category'>
                <li> <span><AiOutlineHome/></span> Blog posts</li>
                <li> <span><FiEdit/></span> New post</li>
                <li></li>
            </ul> 
            <br/>
              <ul className='category'>
                <li className='topCate'>CATEGORY</li>
                <li> <span><GiAirplaneDeparture/></span> Travel</li>
                <li> <span><FiMusic/></span> Music</li>
                <li> <span><FaRegHandshake/></span> Politics</li>
                <li> <span><BiMoviePlay/></span> Movies</li>
                <li> <span><BiBook/></span> Books</li>
                <li> <span><MdOutlineFastfood/></span> Food</li>
                <li> <span><BsPeople/></span> Lifestyle</li>
                <li> <span><GiEyelashes/></span> Makeup</li>
              </ul>

              <DropDown/>
            </div>
     <div className='adminBody'> 
        <div className='adminTop'>
         <img className='logoImg' src={logo} alt='pic'/> 
            <div className='adminName' >
            <h5> Admin Name  </h5>
            <span><CgProfile/></span>
             </div>
        </div>
          <div className='editor'></div>
      </div>  
        
    </div>
  )
}

export default Home


