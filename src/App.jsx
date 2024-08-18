import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useParams } from "react-router-dom";

import Navbar from "./Layout/navbar";
import Home from "./pages/Home";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/adduser",
    element: (
      <>
        <Navbar />
        <AddUser />
      </>
    ),
  },
  {
    path: "/edituser/:id",
    element: (
      <>
        <Navbar />
        <EditUser />
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
