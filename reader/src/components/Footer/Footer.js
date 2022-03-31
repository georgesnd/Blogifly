import "./Footer.css";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>&copy; 2022. Designed and built by Tanya, George and Dave with ❤️</div>
      <div>
        <a href="https://github.com/TanyaDT/Blogifly" target="_blank" className="row">
          <FaGithub className="icon" />
          Visit our Project on GitHub!
        </a>
      </div>
    </footer>
  );
}

export default Footer;
