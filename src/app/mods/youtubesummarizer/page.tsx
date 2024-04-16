"use client";
import "./youtube.css";
import { useState } from "react";

const youtubesummarizer = () => {
  const [url, setUrl] = useState<String | undefined>("");
  const [result, setResult ] = useState<Array<string>>([]);
  const res2 = 'hello\nthere!'
  async function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:8080/api/youtubesummarizer', {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({ "link": url })
    }).then((response) => response.json())
    .then((data) => {const {result} = data ; setResult(result)})}
  function HandleOnChange(e: React.FormEvent<HTMLInputElement>) {
    //@ts-ignore
    setUrl(e.target.value);
  }
  return (
    <div className="wrappermod1">
      <div className="container">
        <div className="text">
          <h1>Summarizing your YouTube Videos in one click !</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            deserunt optio beatae officiis voluptates commodi aliquid minima
            odit, enim ab?
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
        <div className="result">
        {result.map((line: any) => {
              return (
                <div>
                  <span key={line}>{line}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default youtubesummarizer;
