import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./Navbar.css";
import "./CreatePage.css";
import { useState } from "react";
import axios from "axios";

function CreatePage() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleCreate() {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("content", content);

    try {
      await axios.post("http://localhost:5000/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
      alert("New post has been updated");
    } catch (error) {
      console.error("Error creating post", error);
    }
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
        {file && (
          <img
            className="image"
            src={URL.createObjectURL(file)}
            alt="Selected"
          />
        )}
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
        <br />
        <br />
        <Button onClick={handleCreate}>Create</Button>
        <br />
        <br />
      </section>
    </>
  );
}

export { CreatePage };
