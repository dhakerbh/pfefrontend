import { FaGithub, FaFacebook } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="/about" id="link">
        About Us
      </a>
      <div className="icons">
        <a href="https://www.github.com/dhakerbh">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.facebook.com/raa33d">
          <FaFacebook className="icon" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
