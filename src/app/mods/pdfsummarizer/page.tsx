"use client";
import "./mod1.css";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

import uploadfile from "./uploadfile";

const pdfsummarizer = () => {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();
  const [extractedText, setExtractedText] = useState<any>([]);
  async function HandleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (file) {
      console.log("name =", file.name);
      let objectText = await uploadfile(file);

      const arrayText = Object.values(objectText);
      setExtractedText(arrayText[0] as any);
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
        <div className="result-container">
        <div className="result dummy"><div><span>Title: THIS IS A DYMMY TEXT PLACEHOLDER
</span></div><div><span>
</span></div><div><span>Summary: AI chips have become a selling point for phones, but why are they suddenly necessary? While cloud-based AI has its advantages, there are limitations to offloading tasks to the cloud. Local AI processing on devices offers faster response times and better privacy. Currently, NPUs are optimized for simple AI tasks, but more advanced forms of generative AI may not be efficient enough to run on phones yet. Hardware manufacturers are still figuring out the sweet spot for AI functionality on devices, with a push towards more local processing. As AI functions become more prevalent, we can expect to see more NPUs in both phones and desktop/laptop processors.
</span></div><div><span>
</span></div><div><span>Important details:
</span></div><div><span>
</span></div><div><span>* AI chips are optimized for AI tasks but may suck at other functions.
</span></div><div><span>* Local AI processing offers faster response times and better privacy.
</span></div><div><span>* Cloud-based AI has its advantages, but there are limitations to offloading tasks to the cloud.
</span></div><div><span>* NPUs are currently optimized for simple AI tasks, but more advanced forms of generative AI may not be efficient enough to run on phones yet.
</span></div><div><span>* Hardware manufacturers are still figuring out the sweet spot for AI functionality on devices.</span></div></div>
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
