import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./components/Nav/Navbar";
import Message from "./components/Message/Message";
import Signup from "./components/Signup";
import DisasterClassifier from "./ImageClassifier";
import Notification from "./Notify";
import CommunitySupport from "./community";
import SafetyTips from "./Safety";
import Donation from "./Donation";
import MarkerMap from "./MarkerMap";

function App() {
  const [messages, setMessages] = useState([]);

  // Function to add a new message
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ImageClassifier" element={<DisasterClassifier />} />
        <Route path="/Notify" element={<Notification />} />
        <Route path="/Safety" element={<SafetyTips />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/MarkerMap" element={<MarkerMap />} />
        <Route path="/community" element={<CommunitySupport messages={messages} addMessage={addMessage} />} />
      </Routes>
      <div className="message-container">
        {messages.map((message, index) => (
          <Message
            key={index}
            name={message.name}
            content={message.content}
            isCurrentUser={message.isCurrentUser}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

