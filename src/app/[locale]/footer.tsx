import { FaGithub, FaFacebook } from "react-icons/fa";
import "./footer.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <Link href="/about" id="link">
        About Us
      </Link>
      <div className="icons">
        <Link href="https://www.github.com/dhakerbh">
          <FaGithub className="icon" />
        </Link>
        <Link href="https://www.facebook.com/raa33d">
          <FaFacebook className="icon" />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
