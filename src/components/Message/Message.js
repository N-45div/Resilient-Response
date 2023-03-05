import React from "react";
import "./Message.css";

function Message({ name, content, isCurrentUser }) {
  return (
    <div
      className={`message-container ${
        isCurrentUser ? "current-user" : "other-user"
      }`}
    >
      <div className="avatar" />
      <div className="message">
        <div className="name">{name}</div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
}

export default Message;
