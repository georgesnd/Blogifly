import './Inspiration.css';
import thumbnailWordpress from '../../assets/thumbnail-wordpress.svg';
import { FiExternalLink } from 'react-icons/fi';

function Inspiration() {
  return (
    <div className='container-inspiration'>
    <div className='container-heading'>
      <h1>Inspiration</h1>
    </div>
    <div className='container-cards'>
      <div className='card-inspiration'>
        <div className='card-header'>
          <img className='avatar' src={thumbnailWordpress}></img>
          <h2>WordPress</h2>
        </div>
        <p>We got some inspiration from WordPress. Click 'visit' to see more about WordPress...</p>
        <div className='inspiration-container-icons'>
          <a href='https://wordpress.com/' target='_blank'><FiExternalLink /> visit</a>
        </div>
      </div>

      <div className='card-inspiration'>
        <div className='card-header'>
          <img className='avatar' src={thumbnailWordpress}></img>
          <h2>WordPress</h2>
        </div>
        <p>We got some inspiration from WordPress. Click 'visit' to see more about WordPress...</p>
        <div className='inspiration-container-icons'>
          <a href='https://wordpress.com/' target='_blank'><FiExternalLink /> visit</a>
        </div>
      </div>

      <div className='card-inspiration'>
        <div className='card-header'>
          <img className='avatar' src={thumbnailWordpress}></img>
          <h2>WordPress</h2>
        </div>
        <p>We got some inspiration from WordPress. Click 'visit' to see more about WordPress...</p>
        <div className='inspiration-container-icons'>
          <a href='https://wordpress.com/' target='_blank'><FiExternalLink /> visit</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Inspiration;
