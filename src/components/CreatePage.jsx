import { Button, Upload, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./CreatePage.css";
import { useState } from "react";
import axios from "axios";
import { UploadOutlined } from '@ant-design/icons';

function CreatePage() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const handleChange = info => {
    const file = info.fileList[0];
    if (file) {
      setFile(file.originFileObj);
    }
  };

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
      <h1 className="heading-1">Upload an image and enter your thoughts</h1>
      <br />
      <section className="section-1">
        <h2 className="heading-2">Add your Image</h2>
        <br />
        <Upload
          listType="picture"
          beforeUpload={() => false} // Prevent automatic upload
          onChange={handleChange}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
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
        <Input.TextArea
          className="custom-textarea"
          rows={20}
          placeholder="Write your blog here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <br />
        <Button type="primary" onClick={handleCreate}>Create</Button>
        <br />
        <br />
      </section>
    </>
  );
}

export { CreatePage };
