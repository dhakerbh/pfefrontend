"use client";
import { useState, useEffect } from "react";

import ProfileBig from "@/components/profileBig";
import { decodeToken } from "react-jwt";
import "./me.css";
function myProfile() {
  const [user, setUser] = useState<object>({});
  // @ts-ignore
  const token = decodeToken(localStorage.getItem("jwt"));
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    await fetch("http://127.0.0.1:8080/user", {
      method: "POST",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: token.id }),
    })
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
      });
  };
  // @ts-ignore
  const role = decodeToken(localStorage.getItem("jwt")).role;
  return (
    <div className="profile-page-container">
      <ProfileBig />
      <div className="details">
        <h2>{user.fullname}</h2>
        <p>{user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}
export default myProfile;
