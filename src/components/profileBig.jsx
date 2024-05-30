"use client";
import { useEffect, useState } from "react";
import "./profilebig.css";
import { decodeToken } from "react-jwt";

function profileBig() {
  const [profile, setProfil] = useState(false);
  const [userRole, setUserRole] = useState("");
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

  function logout() {
    localStorage.clear();
    console.log("logged out!");
    window.location.href = "/";
  }
  return (
    <>
      {profile && (
        <div className="big-profile-container">
          <h1 className="big-profile-icon">{profile}</h1>

          <div className="buttons">
            {userRole == "admin" && <a href="/dashboard">Admin Dashboard</a>}
            <a href="/me/edit">Update Profile</a>
            <a href="/history">My History</a>

            <a href="#" id="logout" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      )}
    </>
  );
}
export default profileBig;
