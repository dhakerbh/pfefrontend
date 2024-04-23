"use client";
import { useState, useEffect } from "react";
import "./register.css";

function page() {
  const [fullname, setFullname] = useState<string>("");
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
    fetch("http://127.0.0.1:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, password, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message, typeof data.message);
        if (data.message == "User Already Exists") {
          setColor("red");
          setStatus(data.message);
        } else {
          setColor("green");
          setStatus(data.message);
        }
      })
      .catch((error) => console.error("Error registering user:", error));
  }
  return (
    <form onSubmit={handleSubmit} id="registerform">
      {color && <p className={color}>{status}</p>}

      <label htmlFor="name">Full name:</label>
      <input
        type="text"
        id="name"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <button type="submit" id="submit">
        Register
      </button>
    </form>
  );
}
export default page;
