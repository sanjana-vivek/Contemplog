import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./Navbar.css";
import "./CreatePage.css";
import { useState } from "react";

function CreatePage() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleCreate() {
    const post = { image: file, content };
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    navigate("/");
    alert("New post has been updated")
  }

  return (
    <>
      <Navbar />
      <h1 className="heading-1">Upload an image and enter your thoughts</h1>
      <br />
      <section className="section-1">
        <h2 className="heading-2">Add your Image</h2>
        <br />
        <input type="file" onChange={handleChange} />
        <br />
        <br />
        {file && <img className="image" src={file} alt="Selected" />}
        <br />
        <br />
        <h2 className="heading-2">Collect your thoughts</h2>
        <textarea
          rows={20}
          cols={140}
          placeholder="Write your blog here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </section>
      <br />
      <section className="upload-image-button">
        <Button onClick={handleCreate}>Create</Button>
      </section>
      <br />
      <br />
    </>
  );
}

export { CreatePage };
