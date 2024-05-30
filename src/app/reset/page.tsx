"use client";
import "./reset.css";
import { useEffect, useState } from "react";

const youtubesummarizer = () => {
  const [result, setResult] = useState<Array<string>>([]);
  const [email, setEmail] = useState<string>("");

  async function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8080/resetrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.reset);
      });
  }
  useEffect(() => {
    document.title = "Students Savior - Password Reset";
  }, [result]);
  function HandleOnChange(e: React.FormEvent<HTMLInputElement>) {
    //@ts-ignore
    setEmail(e.target.value);
  }

  return (
    <div className="passresetwrap">
      <div className="container">
        <div className="result-container">
          <div className="result-text">{result}</div>
        </div>
        <div className="text">
          <h1>Reset You password!</h1>
          <p>Enter your email and you'll get a reset link</p>
        </div>
        <form className="main">
          <input
            type="email"
            id="email"
            name="email"
            onChange={HandleOnChange}
            value={email}
            required
          />
          <div className="submit">
            <input
              type="submit"
              id="submit"
              value="SEND!"
              onClick={HandleOnSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default youtubesummarizer;
