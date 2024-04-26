"use client";
import { useEffect, useState } from "react";

const history = () => {
  const [historyElements, setHistoryElements] = useState<Array<string>>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    getHistory();
  }, []);
  const email = localStorage.getItem("email");

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
      .then((data) => setHistoryElements(data["result"]));
  }
  return (
    <div className="hs-container">
      {historyElements.length == 0 && (
        <div className="nohistory">No History yet , Create One </div>
      )}
      {historyElements &&
        historyElements.map((line: any) => {
          return (
            <div key={line}>
              <div className="module">{line.module}</div>
              <div className="details">
                <div className="about">
                  <span id="link">{line.link}</span>
                  <span id="time">{line.time}</span>
                </div>
                <div className="content">
                  <h6>
                    {showMore
                      ? line.data
                      : `${line.data.toString().substring(0, 255)}...`}
                    <button
                      className="btn"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "Show less" : "Show more"}
                    </button>
                  </h6>
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
