"use client";
import React from "react";
import { FaYoutube, FaRegFilePdf, FaImage } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { BsFiletypeTxt } from "react-icons/bs";
import { useLocale, useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { withRouter } from "next/router";

import "./header.css";

const Header = ({ router }: any) => {
  const locale = useLocale();
  const t = useTranslations("");
  const [isOpen, setIsOpen] = React.useState(false);

  const locales = ["en", "fr"] as const;

  const { Link, usePathname, redirect } = createSharedPathnamesNavigation({
    locales,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function closeDropdown(local: string) {
    console.log({ local });

    router.push(router.pathname, undefined, { locale: local });

    // setIsOpen(false);
  }

  // const gotosite = ()=>{
  //   router.replace(pathname, {locale: 'de'});

  // }
  return (
    <header>
      <Link href="/">
        <img src="/logo.png" alt="logo" />
      </Link>

      <li>
        <Link href="mods/youtubesummarizer">
          {" "}
          <FaYoutube className="react-icons" />
          YouTube Video Summarizer
        </Link>
      </li>

      <li>
        <Link href="mods/pdfsummarizer">
          <FaRegFilePdf className="react-icons" />
          PDF Summarizer
        </Link>
      </li>

      <li>
        <Link href="mods/imagetotext">
          {" "}
          <FaImage className="react-icons" />
          Image To Text
        </Link>
      </li>

      <li>
        <Link href="mods/textsummarizer">
          <BsFiletypeTxt className="react-icons" />
          {t("Text Summarizer")}
        </Link>
      </li>

      <li>
        <Link href="about">
          <MdInfoOutline className="react-icons" />
          About Us
        </Link>
      </li>
      {/* <input type="button" value="TEST" onClick={() => console.log(locale)} /> */}
      <div className="w-full py-6 pb-8">
        <div className="relative inline-block">
          <button
            type="button"
            className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
            onClick={toggleDropdown}
          >
            Dropdown
          </button>

          {isOpen && (
            <div>
              <ul aria-labelledby="options-menu">
                <span>
                  <Link href="/" locale="en">
                    Englais
                  </Link>
                </span>
                <span>
                  <Link href="/" locale="fr">
                    francais
                  </Link>
                </span>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
