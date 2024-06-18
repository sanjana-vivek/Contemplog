import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import "./HomePage.css";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="heading-1">Where thoughts take shape</h1>
      <br/>
      <div className="home-page">
        {posts.length === 0 ? (
          <p>No posts yet. Click "Create New Post" to add your first post!</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="post">
              {post.image && <img className="post-image" src={post.image} alt="Post" />}
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export { HomePage };
