import React from "react";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import blogLogo from "../assets/contemplog-logo-white-no-bg.svg";
import "./Navbar.css";

function Logo() {
  return <img src={blogLogo} alt="Contemplog Logo" width={250} height={150} />;
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <div className="navbar">
    <section>
        <Link to="/">
          <Logo />
        </Link>
      </section>
      <section className="create-post-button">
        <Button onClick={() => navigate("/create")}>Create Post</Button>
      </section>
    </div>
    </>
  );
}

export { Navbar };
