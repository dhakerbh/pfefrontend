"use client";
import "./page.css";

export default function Home() {
  return (
    <div className="landing-container">
      <div className="photo"></div>
      <div className="text-cont">
        <h1 className="main-h1">
          Elevate Your Education with <span>Students Savior</span> – Your Path
          to Excellence Begins Here!
        </h1>{" "}
        <a
          href={
            localStorage.getItem("jwt")
              ? "/mods/youtubesummarizer"
              : "/register"
          }
        >
          Start Now 🌟
        </a>
      </div>
    </div>
  );
}
