"use client";
/*
______ _____ _   _ _____ _____ _   _  ___________ 
|  ___|_   _| \ | |_   _/  ___| | | ||  ___|  _  \
| |_    | | |  \| | | | \ `--.| |_| || |__ | | | |
|  _|   | | | . ` | | |  `--. \  _  ||  __|| | | |
| |    _| |_| |\  |_| |_/\__/ / | | || |___| |/ / 
\_|    \___/\_| \_/\___/\____/\_| |_/\____/|___/  
*/
import "./textsum.css";
import { useEffect, useState, useRef } from "react";
//import get_summary from "./getsummary";
const pdfsummarizer = () => {
  const [text, setText] = useState<string>("");
  const [resultSummary, setResultSummary] = useState<string>("");
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {}, [resultSummary]);

  async function get_summary(text: string) {
    const email = localStorage.getItem("email");
    if (overlay.current !== null) {
      overlay.current.style.display = "flex";
      const req = await fetch("http://127.0.0.1:8080/api/summarizetext", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text, email: email }),
      })
        .then((response) => response.json())
        .then((data) => {
          const { message } = data;
          setResultSummary(message);
        });
      overlay.current.style.display = "none";
    }
  }

  async function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    get_summary(text);
  }
  function HandleChange({ target }: React.SyntheticEvent) {
    // @ts-ignore

    setText(target.value);
  }
  return (
    <div className="wrappermod1">
      <div className="container">
        <div className="text">
          <h1>Paste the text, and the AI will do the Magic !</h1>
          <p>
            Discover efficiency at its finest with our Text Summarizer tool!
            Revolutionizing the way you absorb information, this digital gem
            condenses lengthy texts into concise, coherent summaries. Driven by
            advanced natural language processing, it dissects content to deliver
            key insights effortlessly. Perfect for professionals and students
            alike, our Text Summarizer ensures clarity without sacrificing
            substance. Simplify your reading experience and elevate your
            understanding with this indispensable addition to your toolkit!
          </p>
        </div>
        <textarea
          rows={15}
          cols={100}
          id="text"
          // @ts-ignore

          value={text}
          onChange={(e) => {
            HandleChange(e);
          }}
        ></textarea>
        <div className="submit">
          <input
            type="button"
            id="submit"
            value="Summarize"
            onClick={HandleOnSubmit}
          />
        </div>
        <div className="result-container">
          <div className="result-text">{resultSummary && resultSummary}</div>
        </div>
      </div>
      <div ref={overlay} className="loading-overlay">
        <div className="loader"></div>
      </div>
    </div>
  );
};
export default pdfsummarizer;
