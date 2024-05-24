"use client";
import { useEffect, useState } from "react";
import "./login.css";
import { decodeToken } from "react-jwt";
function page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [profile, setProfil] = useState<boolean>(false);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    document.title = "Students Savior - Login";

    try {
      // @ts-ignore
      setProfil(decodeToken(token).profile);
      if (profile) {
        window.location.href = "/";
      }
    } catch (e) {
      ("");
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
          localStorage.setItem("jwt", data.token);
          setColor("green");
          setStatus(data.message);
          window.location.href = "/";
        } else {
          setColor("red");
          setStatus(data.message);
        }
      })
      .catch((error) => console.error("Error logging in user:", error));
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} id="loginform">
        <h1>WELCOME</h1>
        {color && <p className={color}>{status}</p>}
        <br />
        <label htmlFor="email">Email:</label>
        <br />

        <input
          placeholder="email@host.com"
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
          placeholder="●●●●●●●●●"
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
        <a href="/reset" id="question">
          {" "}
          Reset your password
        </a>

        <br />
        <button type="submit" id="submit">
          Login
        </button>
        <br />
        <a href="/register" id="question">
          {" "}
          Don't have Account ? Register here !
        </a>
      </form>
    </div>
  );
}
export default page;
