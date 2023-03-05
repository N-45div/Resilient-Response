import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  onValue,
  serverTimestamp,
} from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl5QK5j-Ki2YnXVHYfimUxzwO4m8YTc10",
  authDomain: "personal-56558.firebaseapp.com",
  projectId: "personal-56558",
  storageBucket: "personal-56558.appspot.com",
  messagingSenderId: "684947303218",
  appId: "1:684947303218:web:0421792cb82d8c42a2452b",
  measurementId: "G-D02H33J4GJ"
};

const app = initializeApp(firebaseConfig);

const CommunitySupport = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const db = getDatabase();
  const messagesRef = ref(db, "messages");

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setMessages(messageList);
      } else {
        setMessages([]);
      }
    });
  }, []);

  const addMessage = (event) => {
    event.preventDefault();

    push(messagesRef, {
      name,
      message,
      timestamp: serverTimestamp(),
    });

    setName("");
    setMessage("");
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-header">Community Support</div>
            <div className="card-body">
              <form onSubmit={addMessage}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="What's happening?"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4 py-2"
                  >
                    Tweet
                  </button>
                </div>
              </form>
              <hr />
              <div className="messages">
                {messages.map((message) => (
                  <div key={message.id} className="card mb-3">
                    <div className="card-header d-flex justify-content-between">
                      <div>{message.name}</div>
                      <div className="text-muted">
                        {new Date(message.timestamp).toLocaleString()}
                      </div>
                    </div>
                    <div className="card-body">{message.message}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;
