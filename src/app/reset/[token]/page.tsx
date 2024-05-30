"use client";

import { METHODS } from "http";
import { useEffect, useState } from "react";
import "./token.css";
// @ts-ignore
function resetPass({ params }) {
  const [verified, setVerified] = useState(false);
  const [color, setColor] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [pass1, setPass1] = useState<string>("");
  const [pass2, setPass2] = useState<string>("");

  const token = params.token;
  useEffect(() => {
    verifyToken();
  }, [token]);
  function verifyToken() {
    fetch("http://127.0.0.1:8080/verifyreset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    })
      .then((response) => response.json())
      .then((data) => {
        setVerified(true);
      })
      .catch((e) => {
        ("");
      });
  }

  const handleSave = async () => {
    if (pass1 != pass2) {
      setColor("red");
      setStatus("Password doesn't match !");
      return "";
    } else {
      await fetch("http://127.0.0.1:8080/changepassword", {
        method: "PUT",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: pass1 }),
      })
        .then(() => {
          setColor("green");
          setStatus("password changed Successfully!");
        })
        .catch((e) => {
          setColor("red");
          setStatus("An error occured!");
        });
    }
  };

  return (
    <>
      {verified ? (
        <div className="passresettoken">
          <form onSubmit={(e) => e.preventDefault()}>
            {color && (
              <p className={color} id="colored">
                {status}
              </p>
            )}

            <h2>Type new password twice:</h2>
            <input
              type="password"
              name="pass1"
              value={pass1}
              onChange={(e) => {
                setPass1(e.target.value);
              }}
              id="pass1"
            />

            <input
              type="password"
              name="pass2"
              value={pass2}
              onChange={(e) => {
                setPass2(e.target.value);
              }}
              id="pass2"
            />
            <button type="submit" onClick={handleSave}>
              Update
            </button>
          </form>
        </div>
      ) : (
        <p>Token not found !</p>
      )}
    </>
  );
}
export default resetPass;
