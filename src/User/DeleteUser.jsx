import React from "react";

const DeleteUser = () => {
  return (
    <>
      <form onSubmit={() => deletedata}>
        <h2>Delete Employee</h2>

        <div>
          <input
            type="text"
            name=" id"
            value={id}
            placeholder=" Enter employee id"
          />

          <Link>
            {" "}
            <button>Delete</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default DeleteUser;
