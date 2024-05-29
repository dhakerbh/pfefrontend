"use client";
import { useEffect, useState } from "react";
import { MdInfoOutline, MdDeleteOutline } from "react-icons/md";
import { BsFiletypeTxt } from "react-icons/bs";
import { FaYoutube, FaRegFilePdf, FaImage } from "react-icons/fa";
import { decodeToken } from "react-jwt";
import "./adminhistory.css";
// @ts-ignore

function userHistory({ params }) {
  const [historyElements, setHistoryElements] = useState<Array<string>>([]);
  const [showMoreList, setShowMoreList] = useState<Array<boolean>>([]);
  const [email, setEmail] = useState<string>("");
  useEffect(() => {
    document.title = "Students Savior - User History";
    try {
      // @ts-ignore
      setUserRole(decodeToken(token)?.role);
      // @ts-ignore

      if (decodeToken(token)?.role != "admin") window.location.href = "/";
    } catch (e) {
      ("");
    }
    getemail();
    getHistory();
  }, []);
  function getemail() {
    fetch("http://127.0.0.1:8080/getEmail", {
      method: "POST",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: params.id }),
    })
      .then((data) => data.json())
      .then((data) => {
        setEmail(data.email);
        console.log("data is ", data.email);
      });
  }
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
    // @ts-ignore

    await fetch("http://127.0.0.1:8080/adminhistory", {
      method: "POST",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: params.id }),
    })
      .then((data) => data.json())
      .then((data) => {
        setHistoryElements(data["result"]);
        let arr = new Array(data["result"].length).fill(false);
        setShowMoreList(arr);
      })
      .catch((e) => console.log(e));
  }
  async function deleteHistory(line: any) {
    setHistoryElements(
      historyElements.filter((item: any) => item.id != line.id)
    );
    await fetch("http://127.0.0.1:8080/deletehistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: line.email, id: line.id }),
    }).then(() => console.log("Deleted successfully! "));
  }
  return (
    <div className="hs-container">
      {email && (
        <h1>
          Viewing history Of <span id="email">{email}</span>{" "}
        </h1>
      )}
      <div className="hs">
        {historyElements?.length == 0 && (
          <div className="nohistory">No History yet , Create One </div>
        )}
        {historyElements &&
          historyElements.map((line: any, id: any) => {
            const data = line.data.toString();
            return (
              <div className="line" key={id}>
                <div className="module">
                  <span className="icon">{getIcon(line.module)}</span>
                </div>
                <div className="details">
                  <div className="about">
                    <p id="link">
                      {line.link == "-" ? "Text input" : line.link}
                    </p>
                    <p id="time">{line.time}</p>
                  </div>
                  <div className="content">
                    <h4>
                      {showMoreList[id]
                        ? data.slice(["\n", "`\t"])
                        : `${data.substring(0, 455)}...`}
                      {data.length > 455 && (
                        <button
                          className="btn"
                          onClick={() => {
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
                      )}
                    </h4>
                  </div>
                </div>
                <div className="deletebtn">
                  <div className="innerdelete">
                    <MdDeleteOutline
                      id="deletebtn"
                      onClick={() => {
                        deleteHistory(line);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default userHistory;
