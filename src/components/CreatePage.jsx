import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./Navbar.css";

function CreatePage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <br />
      <br />
      
    </>
  );
}

export { CreatePage };
