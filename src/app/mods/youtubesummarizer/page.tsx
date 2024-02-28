"use client";
import "./youtube.css";
import { useState } from "react";

const youtubesummarizer = () => {
  const [url, getUrl] = useState<String | undefined>();

  function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    // SUMBIT FUNCTION
  }
  function HandleOnChange(e: React.FormEvent<HTMLInputElement>) {
    //@ts-ignore
    getUrl(e.target.value);
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
      </div>
    </div>
  );
};
export default youtubesummarizer;
