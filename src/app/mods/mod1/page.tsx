"use client";
import "./mod1.css";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const mod1 = () => {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();

  async function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log("file ", file);
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
            className="input-field"
            onChange={HandleOnChange}
          />
          <input
            type="button"
            className="submit"
            value="SEND!"
            onClick={HandleOnSubmit}
          />
          {file ? (
            <div className="fileque">
              <p>{fileName} </p> <MdDelete />
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
};
export default mod1;
