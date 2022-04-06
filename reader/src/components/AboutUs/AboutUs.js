import './AboutUs.css';
import avatar from '../../assets/avatar.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function AboutUs() {
  return (
  <div className='container-aboutUs'>
    <div className='container-heading'>
      <h1>About us</h1>
    </div>
    <div className='container-cards'>
      <div className='card-aboutUs'>
        <div className='card-header'>
          <img className='avatar' src={avatar}></img>
          <h2>George</h2>
        </div>
        <p>Hi, my name is George! I'm an aspiring Junior Web Developer at the DCI - Digital Career Institute. I contributed to this project.</p>
        <div className='container-icons'>
          <a href='https://www.github.com/' target='_blank'><FaGithub /></a>
          <a href='https://www.linkedin.com/' target='_blank'><FaLinkedin /></a>
        </div>
      </div>

      <div className='card-aboutUs'>
        <div className='card-header'>
          <img className='avatar' src={avatar}></img>
          <h2>Tanya</h2>
        </div>
        <p>Hi, my name is Tanya! I'm an aspiring Junior Web Developer at the DCI - Digital Career Institute. I contributed to this project.</p>
        <div className='container-icons'>
          <a href='https://www.github.com/' target='_blank'><FaGithub /></a>
          <a href='https://www.linkedin.com/' target='_blank'><FaLinkedin /></a>
        </div>
      </div>

      <div className='card-aboutUs'>
        <div className='card-header'>
          <img className='avatar' src={avatar}></img>
          <h2>Dave</h2>
        </div>
        <p>Hi, my name is Dave! I'm an aspiring Junior Web Developer at the DCI - Digital Career Institute. I contributed to this project.</p>
        <div className='container-icons'>
          <a href='https://www.github.com/' target='_blank'><FaGithub /></a>
          <a href='https://www.linkedin.com/' target='_blank'><FaLinkedin /></a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AboutUs;
