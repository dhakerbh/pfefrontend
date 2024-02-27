"use client";
import "./mod1.css";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const pdfsummarizer = () => {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();

  function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (file) {
      console.log("name =", file.name);
    }
  }
  function HandleDelete() {
    setFile(undefined);
    setFileName("");
  }
  function HandleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setFile(target.files[0]);
    setFileName(target.files[0].name);
  }
  return (
    <div className="wrappermod1">
      <div className="container">
        <div className="text">
          <h1>Summarizing your PDFs has never been easier ! </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            deserunt optio beatae officiis voluptates commodi aliquid minima
            odit, enim ab?
          </p>
        </div>
        <form
          className="upload"
          onClick={(e) => {
            const input = document.querySelector(
              ".input-field"
            ) as HTMLInputElement | null;
            if (input != null) {
              input.click();
            }
          }}
        >
          <input
            type="file"
            name="file"
            accept="application/pdf"
            className="input-field"
            onChange={HandleOnChange}
          />
        </form>
        <div className="submit">
          <input
            type="button"
            id="submit"
            value="SEND!"
            onClick={HandleOnSubmit}
          />
          {file ? (
            <div className="filequeue">
              <p>{fileName} </p>
              <MdDelete onClick={HandleDelete} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default pdfsummarizer;
