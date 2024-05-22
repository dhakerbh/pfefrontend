"use client";
import "./youtube.css";
import { useEffect, useState } from "react";

const youtubesummarizer = () => {
  const [url, setUrl] = useState<String | undefined>("");
  const [result, setResult] = useState<Array<string>>([]);
  const [email, setEmail] = useState<string>("");

  async function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const res = await fetch("http://127.0.0.1:8080/api/youtubesummarizer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link: url, email: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { result } = data;
        console.log(typeof result);
        console.log("Result Weslat ! ");
        console.log();
        setResult(result);
      });
  }
  useEffect(() => {
    document.title = "Students Savior - YouTube Summarizer";
    try {
      const token = localStorage.getItem("jwt");
      // @ts-ignore
      setEmail(decodeToken(token).email);
    } catch (e) {
      ("");
    }
  }, [result]);
  function HandleOnChange(e: React.FormEvent<HTMLInputElement>) {
    //@ts-ignore
    setUrl(e.target.value);
  }
  const listText = result.map((line: any, i: any) => {
    return (
      <div key={i}>
        <span>{line}</span>
      </div>
    );
  });
  return (
    <div className="wrappermod1">
      <div className="container">
        <div className="text">
          <h1>Summarizing your YouTube Videos in one click !</h1>
          <p>
            Quickly get the essence of any YouTube video with our innovative
            summarization tool. Our AI-powered technology extracts the key
            points and important information from the video, delivering it in a
            concise and easily digestible format. Save time and effort while
            staying informed on the topics that matter most to you.
          </p>
        </div>
        <div className="main">
          <input
            type="link"
            onChange={HandleOnChange}
            //@ts-ignore
            value={url}
          />
        </div>
        <div className="submit">
          <input
            type="button"
            id="submit"
            value="SEND!"
            onClick={HandleOnSubmit}
          />
        </div>
        <div className="result-container">
          <div className="result-text">{listText}</div>
        </div>
      </div>
    </div>
  );
};
export default youtubesummarizer;
