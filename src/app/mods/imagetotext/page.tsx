"use client";
import "./imagetotext.css";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

import uploadfile from "./uploadfile";

const pdfsummarizer = () => {
  const [ImageName, setImageName] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();
  const [imageURL, setImageURL] = useState<string>("");
  const [extractedText, setExtractedText] = useState<any>([]);

  async function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (image) {
      console.log("name =", ImageName);
      let objectText = await uploadfile(image);

      const arrayText = Object.values(objectText);
      console.log({ arrayText });
      setExtractedText(arrayText[0] as any);
    }
  }
  function HandleDelete() {
    setImage(undefined);
    setImageName("");
    setImageURL("");
  }
  function HandleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    if (target.files[0] != undefined) {
      setImage(target.files[0]);
      setImageName(target.files[0].name);
      setImageURL(URL.createObjectURL(target.files[0]));
    }
  }
  return (
    <div className="wrappermod1">
      <div className="container">
        <div className="text">
          <h1>Our Image To Text extractor is the best !</h1>
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
          {image ? <img src={imageURL} alt={ImageName} /> : <></>}
          <input
            type="file"
            name="file"
            accept="image/*"
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
          {image ? (
            <div className="filequeue">
              <p>{ImageName} </p>
              <MdDelete onClick={HandleDelete} />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="result-container">
          <div className="result-text">
            {extractedText.map((line: any) => {
              return (
                <div>
                  <span key={line}>{line}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default pdfsummarizer;
