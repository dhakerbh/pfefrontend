"use client";
import "./header.css";
import { FaYoutube, FaRegFilePdf, FaImage } from "react-icons/fa";
import { GrDocumentTxt } from "react-icons/gr";
import { MdInfoOutline } from "react-icons/md";
import { BsFiletypeTxt } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <img src="/logo.png" alt="logo" />

      <li>
        {" "}
        <FaYoutube className="react-icons" />
        <a href="/mods/mod1">YouTube Video Summarizer</a>
      </li>
      <li>
        {" "}
        <FaRegFilePdf className="react-icons" />
        <a href="/mods/mod2">PDF Summarizer</a>
      </li>
      <li>
        {" "}
        <FaImage className="react-icons" />
        <a href="/mods/mod3">Image To Text</a>
      </li>
      <li>
        {" "}
        <BsFiletypeTxt className="react-icons" />
        <a href="/mods/mod5">Text Summarizer</a>
      </li>
      <li>
        {" "}
        <MdInfoOutline className="react-icons" />
        <a href="about">About Us</a>
      </li>
    </header>
  );
};

export default Header;
