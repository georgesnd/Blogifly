import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} />

      <nav>
        <ul>
          <li><a href='#'>Articles</a></li>
          <li><a href='#'>Inspiration</a></li>
          <li><a href='#'>About us</a></li>
          <li><a href='#'>Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
