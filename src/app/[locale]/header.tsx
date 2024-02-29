"use client";
import "./header.css";
import { FaYoutube, FaRegFilePdf, FaImage } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { BsFiletypeTxt } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src="/logo.png" alt="logo" />
      </a>

      <li>
        {" "}
        <FaYoutube className="react-icons" />
        <a href="/mods/youtubesummarizer">YouTube Video Summarizer</a>
      </li>
      <li>
        {" "}
        <FaRegFilePdf className="react-icons" />
        <a href="/mods/pdfsummarizer">PDF Summarizer</a>
      </li>
      <li>
        {" "}
        <FaImage className="react-icons" />
        <a href="/mods/imagetotext">Image To Text</a>
      </li>
      <li>
        {" "}
        <BsFiletypeTxt className="react-icons" />
        <a href="/mods/textsummarizer">Text Summarizer</a>
      </li>
      <li>
        {" "}
        <MdInfoOutline className="react-icons" />
        <a href="/about">About Us</a>
      </li>
    </header>
  );
};

export default Header;
