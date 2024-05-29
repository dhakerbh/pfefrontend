"use client";
import { useEffect, useState } from "react";
import { MdInfoOutline, MdDeleteOutline } from "react-icons/md";
import { BsFiletypeTxt } from "react-icons/bs";
import { FaYoutube, FaRegFilePdf, FaImage } from "react-icons/fa";
import { decodeToken } from "react-jwt";

import "./dashboard.css";
const history = () => {
  const [usersList, setUsersList] = useState<Array<string>>([]);
  const [email, setEmail] = useState<string>("ddd");
  const [userRole, setUserRole] = useState<string>("");

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    document.title = "Students Savior - Dashboard";
    try {
      // @ts-ignore
      setUserRole(decodeToken(token)?.role);
      // @ts-ignore

      if (decodeToken(token)?.role != "admin") window.location.href = "/";
    } catch (e) {
      ("");
    }
    getUsers();
  }, [email]);

  async function getUsers() {
    // @ts-ignore
    await fetch("http://127.0.0.1:8080/users", {
      method: "GET",
      credentials: "omit",
    })
      .then((data) => data.json())
      .then((data) => {
        setUsersList(data["result"]);
      })
      .catch((e) => console.log(e));
  }
  async function deleteUser(line: any) {
    setUsersList(usersList.filter((item: any) => item.id != line.id));
    await fetch("http://127.0.0.1:8080/deleteuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: line.email, id: line.id }),
    }).then(() => console.log("Deleted successfully! "));
  }
  return (
    <div className="hs-container">
      {email && <h1>Admin Dashboard - Clients List </h1>}
      <div className="hs">
        {usersList?.length == 0 && (
          <div className="nohistory">No users yet , Create some </div>
        )}
        {usersList && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Full Name</th>
                <th>Role</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((line: any, id: any) => {
                return (
                  <tr>
                    <td>{id}</td>

                    <td>{line.email}</td>
                    <td>{line.fullname}</td>
                    <td>{line.role}</td>
                    <td>
                      <a href={"/dashboard/edit/" + line.id}>Edit</a>
                      <a href={"/dashboard/history/" + line.id}>History</a>
                      <a id="del">Delete</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default history;
