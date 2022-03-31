import logo from './images/logo.jpg'
import {CgProfile} from 'react-icons/cg'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import AddPost from './AddPost'

function Home() {

  return (
    <div className='adminHomeContainer'>

        <div className='dashBoardContainer'>
        < img src={logo} alt='pic'/>

        <div className='adminName'>
        <h5> Admin Name</h5>
        <CgProfile/>
        </div>

        <div className='sideCat'>
            <h1>Blog Dashboard</h1>
            <ul>
                <li>BlogPost</li>
                <li>Add new post</li>
                <li></li>
            </ul> 
            <br/>

            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Travel</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Music</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Politics</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Movies</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Books</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Food</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Lifestyle</Dropdown.Item>
            </DropdownButton>
        </div>

        </div>
        {/* <AddPost/> */}
    </div>
  )
}

export default Home