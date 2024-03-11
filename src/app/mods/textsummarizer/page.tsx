"use client";
import "./textsum.css";
import { useEffect, useState } from "react";
import get_summary from "./getsummary";
const pdfsummarizer = () => {
  const [text, setText] = useState<String | undefined>("");
  const [resultSummary, setResultSummary] = useState<String | undefined>("");
  useEffect(() => {}, [resultSummary]);
  async function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const { message } = await get_summary("wassp");

    setResultSummary(message);
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
          rows={25}
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
          <div className="result-text">{resultSummary}</div>
        </div>
      </div>
    </div>
  );
};
export default pdfsummarizer;
