import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from 'antd';
import "./HomePage.css";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <br/>
      <h1 className="heading-1">Where thoughts take shape</h1>
      <br/>
      <div className="home-page">
        {posts.length === 0 ? (
          <p>No posts yet. Click "Create New Post" to add your first post!</p>
        ) : (
          posts.map((post, index) => (
            <Card key={index} className="post-card" title="Post" bordered={false}>
              {post.image && <img className="post-image" src={`http://localhost:5000${post.image}`} alt="Post" />}
              <p className="post-content">{post.content}</p>
            </Card>
          ))
        )}
      </div>
    </>
  );
}

export { HomePage };
