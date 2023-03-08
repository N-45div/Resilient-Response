import React, { useState } from "react";
import {Form,Button} from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CommunityPage = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    const newPost = {
      id: posts.length + 1,
      content: message,
      image: image,
      timestamp: timestamp,
      likes: 0,
      shares: 0,
    };
    setPosts([newPost, ...posts]);
    setMessage("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          let width = img.width;
          let height = img.height;
          const max = 250;
          if (width > max) {
            height *= max / width;
            width = max;
          }
          if (height > max) {
            width *= max / height;
            height = max;
          }
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          const dataURL = canvas.toDataURL();
          setImage(dataURL);
        };
      };
    }
  };

  const postItems = posts.map((post) => (
    <div className="post" key={post.id}>
      {post.image && (
        <div className="post-image">
          <img src={post.image} alt="Post" />
        </div>
      )}
      <div className="post-details">
        <div className="post-content">{post.content}</div>
        <div className="post-timestamp">{post.timestamp}</div>
      </div>
      <div className="post-actions">
        <button onClick={() => console.log("Like")}>Like</button>
        <button onClick={() => console.log("Share")}>Share</button>
      </div>
    </div>
  ));

  return (
    <div className="community-page">
      <h1>Community Page</h1>
      <form className="post-form" onSubmit={handleSendMessage}>
        <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
      </form>
      <AliceCarousel
        items={postItems}
        responsive={{ 0: { items: 1 }, 1024: { items: 3 } }}
        autoHeight
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
        vertical
        mouseTracking
      />
    </div>
  );
};

export default CommunityPage;

