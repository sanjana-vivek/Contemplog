import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./Navbar.css";
import "./CreatePage.css";
import { useState } from "react";

function CreatePage() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <Navbar />
      <h1 className="heading-1">Upload an image and enter your thoughts</h1>
      <br />
      <section className="section-1">
        <h2 className="heading-1"> Add your Image </h2>
        <br />
        <input type="file" onChange={handleChange} />
        <br />
        <br/>
        {file && <img className="image" src={file} alt="Selected" />}
        <br/>
        <br />
        <h2 className="heading-1">Collect your thoughts</h2>
        <textarea rows={20} cols={140} placeholder="Write your blog here..."></textarea>
      </section>
      <br />
      <section className="upload-image-button">
        <Button onClick={() => navigate("/")}>Create</Button>
      </section>
      <br />
      <br />
    </>
  );
}

export { CreatePage };
