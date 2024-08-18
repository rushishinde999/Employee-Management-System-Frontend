import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <h2>EmployeeManagement System</h2>

      <div className="addbtn">
        <Link to={"/adduser"}>Add User</Link>
      </div>
    </div>
  );
};

export default Navbar;
