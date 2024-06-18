import React from "react";
import Navbar from "./Navbar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="layout-content">
        {children}
      </div>
    </>
  );
}

export default Layout;
