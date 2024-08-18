import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Adduser.css";

const AddUser = () => {
  const [emp, setEmp] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = emp;
  const inputchange = (e) => {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
  };

  const datasumbit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:9999/add", emp);
      setEmp(result.data);
      alert("data is inserted Sucessfully");
    } catch (error) {
      console.error("something wrong", error);
    }
  };

  return (
    <>
      <form onSubmit={(e) => datasumbit(e)}>
        <h2>Employee Managemnet System</h2>
        <input
          onChange={inputchange}
          type="text"
          placeholder="Enter the name"
          value={name}
          name="name"
        />
        <input
          onChange={inputchange}
          type="text"
          placeholder="Enter the Username"
          value={username}
          name="username"
        />
        <input
          onChange={inputchange}
          type="text"
          placeholder="Enter the Email"
          value={email}
          name="email"
        />
        <button className="Add">Add Student</button>
        <button>
          <Link to={"/"} className="cancel">
            Cancel
          </Link>
        </button>
      </form>
    </>
  );
};

export default AddUser;
