"use client";
import "./header.css";
import { FaYoutube, FaRegFilePdf, FaImage } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { BsFiletypeTxt } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

const Header = () => {
const header = document.querySelector(".header");
const [isSticky,setIsSticky]= useState<boolean>(false)
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 75) {
    setIsSticky(true)
  } else {
    setIsSticky(false)
  }
});
  const { t, i18n } = useTranslation();
  return (
    <header className={isSticky ? 'sticky' : ''}>
      <div className="logo">
      <a href="/">
        <h1>
          <span>S</span>tudents <span>S</span>avior
        </h1></a>
        {/*
        <a href="/">
        <img src="/logo.png" alt="logo" />
      </a>
        */}
        </div>{" "}
      <div className="head-elem-container">
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
        {t("About us")}
      </a>
      <LanguageSwitcher /></div>
    </header>
  );
};

export default Header;
