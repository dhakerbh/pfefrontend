"use client";
import { useState, useEffect } from "react";
import "./register.css";
import { decodeToken } from "react-jwt";
function page() {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [profile, setProfile] = useState<string>("");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    document.title = "Students Savior - Login";
    try {
      // @ts-ignore
      setProfile(decodeToken(token).profile);
      if (profile) {
        window.location.href = "/";
      }
    } catch (e) {
      ("");
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
    <div className="form-container">
      <form onSubmit={handleSubmit} id="registerform">
        <h1>REGISTER</h1>

        {color && <p className={color}>{status}</p>}

        <label htmlFor="name">Full name:</label>
        <input
          placeholder="Full Name"
          type="text"
          id="name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          placeholder="●●●●●●●●●"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          placeholder="email@host.com"
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
        <br />
        <a href="/login" id="question">
          {" "}
          Already have an Account ? Sign in here !
        </a>
      </form>
    </div>
  );
}
export default page;
