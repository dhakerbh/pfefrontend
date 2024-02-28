"use client";
import "./textsum.css";
import { useState } from "react";

const pdfsummarizer = () => {
  const [text, setText] = useState<String | undefined>("");

  function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log(text);
  }
  function HandleChange({ target }: React.SyntheticEvent) {
    setText(target.value);
  }
  return (
    <div className="wrappermod1">
      <div className="container">
        <div className="text">
          <h1>Paste the text, and the AI will do the Magic !</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            deserunt optio beatae officiis voluptates commodi aliquid minima
            odit, enim ab?
          </p>
        </div>
        <textarea
          rows={25}
          cols={100}
          id="text"
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
      </div>
    </div>
  );
};
export default pdfsummarizer;
