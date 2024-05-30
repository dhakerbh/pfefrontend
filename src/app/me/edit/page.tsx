"use client";
import { useState, useEffect } from "react";
import "./edit.css";
import { decodeToken } from "react-jwt";

// @ts-ignore
function adminEdit({ params }) {
  const [user, setUser] = useState<object>({});
  const [color, setColor] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const userId = decodeToken(localStorage.getItem("jwt")).id;

  const [userEmail, setUserEmail] = useState<string>();

  useEffect(() => {
    fetchUser();
  }, [userId]);
  const fetchUser = async () => {
    await fetch("http://127.0.0.1:8080/user", {
      method: "POST",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId }),
    })
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
        setUserEmail(userData.email);
      });
  };
  // @ts-ignore
  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSaveUser = async () => {
    const response = await fetch("http://127.0.0.1:8080/edituser", {
      method: "PUT",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(() => {
        setColor("green");
        setStatus("User details saved Successfully!");
      })
      .catch((e) => {
        setColor("red");
        setStatus("An error occured!");
      });
  };

  return (
    <div className="adminhscont">
      <h1>Editing Profile</h1>

      {user.id ? (
        <form onSubmit={(e) => e.preventDefault()}>
          {color && (
            <p className={color} id="colored">
              {status}
            </p>
          )}

          <div>
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              name="fullname"
              value={user.fullname}
              onChange={handleInputChange}
              id="fullname"
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              id="email"
            />
          </div>
          <button type="submit" onClick={handleSaveUser}>
            Save
          </button>
        </form>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
export default adminEdit;
