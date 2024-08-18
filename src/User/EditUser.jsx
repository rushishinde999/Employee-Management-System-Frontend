import axios from "axios";
import React, { useEffect, useState } from "react";
import "./EditUser.css";
import { Link, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async (e) => {
    try {
      const result = await axios.get(`http://localhost:9999/display`);

      setUser(result.data);
    } catch (error) {
      console.log("Error loading the user data", error);
    }
  };

  const inputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(`http://localhost:9999/${id}`, user);
      setUser(result.data);
      alert("updated Sucesfully");
    } catch (error) {
      console.log("something wrong", error);
    }
  };

  return (
    <>
      <form onSubmit={onsubmit}>
        <h2>Edit Employee Data</h2>

        <input
          onChange={inputchange}
          type="text"
          name="name"
          value={name}
          placeholder="Enter The Name"
        />
        <input
          onChange={inputchange}
          type="text"
          name="username"
          value={username}
          placeholder="Enter The Username"
        />
        <input
          onChange={inputchange}
          type="text"
          name="email"
          value={email}
          placeholder="Enter The Email"
        />

        <button className="submit">Update Employee</button>
        <button className="cancel">
          <Link to={"/"}>CANCEL</Link>
        </button>
      </form>
    </>
  );
};

export default EditUser;
