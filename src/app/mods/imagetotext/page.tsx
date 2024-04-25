"use client";
import "./imagetotext.css";
import { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";

import uploadfile from "./uploadfile";

const pdfsummarizer = () => {
  const [ImageName, setImageName] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();
  const [imageURL, setImageURL] = useState<string>("");
  const [extractedText, setExtractedText] = useState<any>([]);
  const overlay = useRef<HTMLDivElement>(null);
  const scrollto = useRef<HTMLDivElement>(null);

  async function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (image) {
      if (overlay.current !== null) {
        overlay.current.style.display = "flex";
        const email = localStorage.getItem("email");
        let objectText = await uploadfile(image, email);

        const arrayText = Object.values(objectText);
        if (arrayText[0] != "Error Occured , possibly no words found ") {
          setExtractedText(arrayText[0] as any);
        } else {
          console.log("error !");
        }
        overlay.current.style.display = "none";
        if (scrollto.current != null)
          scrollto.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }
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
            Transform images into editable text with our cutting-edge
            image-to-text tool. Say goodbye to manual data entry and hello to
            efficient document management. Save time and reduce Errors!
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
        <div ref={scrollto} className="result-container">
          <div className="result-text">
            {extractedText &&
              extractedText.map((line: any) => {
                return (
                  <div>
                    <span key={line}>{line}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div ref={overlay} className="loading-overlay">
        <div className="loader"></div>
      </div>
    </div>
  );
};
export default pdfsummarizer;
