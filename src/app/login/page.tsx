"use client";
import { useEffect, useState } from "react";
import "./login.css";

function page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const profile = localStorage.getItem("profile");
  useEffect(() => {
    if (profile) {
      window.location.href = "/";
    }
  }, [profile]);
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    fetch("http://127.0.0.1:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message, typeof data.message);
        if (data.message == "Logged in Successfully") {
          localStorage.setItem("email", email);
          localStorage.setItem("profile", data.profile.toUpperCase());
          setColor("green");
          setStatus(data.message);
        } else {
          setColor("red");
          setStatus(data.message);
        }
      })
      .catch((error) => console.error("Error logging in user:", error));
  }
  return (
    <form onSubmit={handleSubmit} id="loginform">
      {color && <p className={color}>{status}</p>}
      <br />
      <label htmlFor="email">Email:</label>
      <br />

      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setColor("");
          setStatus("");
        }}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <br />

      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setColor("");
          setStatus("");
        }}
        required
      />

      <br />
      <button type="submit" id="submit">
        Login
      </button>
    </form>
  );
}
export default page;
