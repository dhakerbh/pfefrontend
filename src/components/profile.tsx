"use client";
import { useEffect, useState } from "react";
import "./profile.css";
import { decodeToken } from "react-jwt";
function Profile() {
  const [profile, setProfil] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string>("");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    try {
      // @ts-ignore
      setProfil(decodeToken(token).profile?.toUpperCase());
      // @ts-ignore

      setUserRole(decodeToken(token).role);
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
              {userRole == "admin" && <a href="/dashboard">Admin Dashboard</a>}
              <a href="/history">My History</a>

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
