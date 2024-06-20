import React from "react";
import { Navbar } from "./Navbar";
import "./Layout.css";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="layout-content">
        <Outlet/>
      </div>
    </>
  );
}

export default Layout;
