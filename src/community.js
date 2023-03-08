import React, { useState } from "react";
import "./style.css";

function CommunityPage() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([]);

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { message, image };
    setPosts([newPost, ...posts]);
    setMessage("");
    setImage("");
  };

  return (
    <div className="community-page">
      <h1 className="page-title">Community Page</h1>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            className="form-input"
            placeholder="What's on your mind?"
            value={message}
            onChange={handleInput}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="file"
            id="image"
            className="form-input"
            accept="image/*"
            onChange={handleImage}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
      <div className="post-container">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <p className="post-message">{post.message}</p>
            {post.image && <img src={post.image} alt="Post Ig"  className="post-image" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityPage;


