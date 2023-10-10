import { useState } from "react";
import Footer from "../Footer";
import Navbar from "./Nav/Navbar";
import { auth } from "./Nav/config";

const projectID = ""; //write the projectid of the maintainers
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      const response = await fetch("https://api.chatengine.io/chats/", {
        method: "GET",
        headers: authObject,
        redirect: "follow",
      });

      if (response.ok) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        console.log(localStorage.getItem("username"));

        window.location.reload();
        setError("");
      } else {
        setError("Oops, incorrect credentials.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while logging in.");
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="wrapper">
        <div className="form">
          <h1 className="title" style={{ color: "#1a2a6c" }}>
            Welcome to our Communtiy
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              required
            />

            <div align="center">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
            </div>
          </form>
          <h1>{error}</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
