import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import blogLogo from "../assets/contemplog-logo-white-no-bg.svg";
import "./Navbar.css";

function Logo() {
  return <img src={blogLogo} alt="Contemplog Logo" width={250} height={150} />;
}

function Navbar() {
  const [showCreateButton, setShowCreateButton] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // To hide the button when navigating to /create page
  useEffect(() => {
    setShowCreateButton(!location.pathname.startsWith("/create"));
  }, [location.pathname]);

  const handleCreatePostClick = () => {
    navigate("/create");
  };

  return (
    <div className="navbar">
      <section>
        <Link to="/">
          <Logo />
        </Link>
      </section>
      {showCreateButton && (
        <section className="create-post-button">
          <Button onClick={handleCreatePostClick}>Create Post</Button>
        </section>
      )}
    </div>
  );
}

export { Navbar };
