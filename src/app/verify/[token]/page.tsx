"use client";

import { METHODS } from "http";
import { useEffect, useState } from "react";
import "./token.css";
import { stringify } from "querystring";
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
    fetch("http://127.0.0.1:8080/verifyaccount", {
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

            <h2>Account Verified !</h2>
          </form>
        </div>
      ) : (
        <p>Token not found !</p>
      )}
    </>
  );
}
export default resetPass;
