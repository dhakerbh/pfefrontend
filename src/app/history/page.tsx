"use client";
import { useEffect, useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { BsFiletypeTxt } from "react-icons/bs";
import { FaYoutube, FaRegFilePdf, FaImage } from "react-icons/fa";

import "./history.css";
const history = () => {
  const [historyElements, setHistoryElements] = useState<Array<string>>([]);
  const [showMoreList, setShowMoreList] = useState<Array<boolean>>([]);
  useEffect(() => {
    getHistory();
  }, []);
  const email = localStorage.getItem("email");
  function getIcon(module: any) {
    switch (module) {
      case "Youtube Summarizer":
        return <FaYoutube className="react-icons" />;
      case "PDF Summarizer":
        return <FaRegFilePdf className="react-icons" />;
      case "Image To Text":
        return <FaImage className="react-icons" />;
      default:
        return <BsFiletypeTxt className="react-icons" />;
    }
  }
  async function getHistory() {
    const email = localStorage.getItem("email");
    await fetch("http://127.0.0.1:8080/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((data) => data.json())
      .then((data) => {
        setHistoryElements(data["result"]);
        let arr = new Array(data["result"].length).fill(false);
        setShowMoreList(arr);
      });
  }
  return (
    <div className="hs-container">
      {historyElements.length == 0 && (
        <div className="nohistory">No History yet , Create One </div>
      )}
      {historyElements &&
        historyElements.map((line: any, id: any) => {
          return (
            <div className="line" key={id}>
              <div className="module">
                <span className="icon">{getIcon(line.module)}</span>
              </div>
              <div className="details">
                <div className="about">
                  <p id="link">{line.link}</p>
                  <p id="time">{line.time}</p>
                </div>
                <div className="content">
                  <h4>
                    {showMoreList[id]
                      ? line.data
                      : `${line.data.toString().substring(0, 255)}...`}

                    <button
                      className="btn"
                      onClick={() => {
                        let arr = showMoreList;
                        setShowMoreList(
                          showMoreList.map((item, index) =>
                            index == id ? !item : item
                          )
                        );
                        console.log(showMoreList[id]);
                      }}
                    >
                      {showMoreList[id] ? "Show less" : "Show more"}
                    </button>
                  </h4>
                </div>
              </div>
              {
                //{email,data, link, module, time}
              }
            </div>
          );
        })}
    </div>
  );
};
export default history;
