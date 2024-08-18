import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    loaduser();
  });
  const loaduser = async () => {
    const result = await axios.get("http://localhost:9999/display");
    setEmp(result.data);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((emp, index) => (
            <>
              <tr key={index}></tr>

              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.username}</td>
              <td>{emp.email}</td>

              <button className="edit">Edit</button>
              <button className="delete"> Delete</button>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
