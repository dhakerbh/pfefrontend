"use client"

import { FaGithub, FaFacebook } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import "./footer.css";
const Footer = () => {

  const { t, i18n } = useTranslation();

  return (
    <footer suppressHydrationWarning>
      <a href="/about" id="link" >
       { t("About us")}
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
