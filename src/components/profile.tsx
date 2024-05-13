"use client";
import { useEffect, useState } from "react";
import "./profile.css";
import { decodeToken } from "react-jwt";
function Profile() {
  const [profile, setProfil] = useState<boolean>(false);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    try {
      // @ts-ignore
      setProfil(decodeToken(token).profile?.toUpperCase());
    } catch (e) {
      ("");
    }
  }, [profile]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  function logout() {
    localStorage.clear();
    console.log("logged out!");
    window.location.href = "/";
  }
  return (
    <>
      {!profile && (
        <div className="loginsignup">
          <div className="buttons">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </div>
      )}
      {profile && (
        <div
          className="profile-icon"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <h1>{profile}</h1>
          {isOpen && (
            <div className="dropdown">
              <a href="/history">History</a>

              <a href="#" id="logout" onClick={logout}>
                Logout
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default Profile;
