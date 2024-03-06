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
      </a>{" "}
      <a className="head-elem" href="/mods/youtubesummarizer">
        <FaYoutube className="react-icons" />
        YouTube Video Summarizer
      </a>
      <a className="head-elem" href="/mods/pdfsummarizer">
        <FaRegFilePdf className="react-icons" />
        PDF Summarizer
      </a>
      <a className="head-elem" href="/mods/imagetotext">
        <FaImage className="react-icons" />
        Image To Text
      </a>
      <a className="head-elem" href="/mods/textsummarizer">
        <BsFiletypeTxt className="react-icons" />
        Text Summarizer
      </a>
      <a className="head-elem" href="/about">
        <MdInfoOutline className="react-icons" />
        About Us
      </a>
    </header>
  );
};

export default Header;
