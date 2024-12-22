import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/includes/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
