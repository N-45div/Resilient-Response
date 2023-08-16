import { useState } from 'react';
import Footer from '../Footer';
import Navbar from './Nav/Navbar';


const projectID = 'use your own API key'; //Subject to improve and move on from api to a full fledged dynamic and robust community

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      const response = await fetch('https://api.chatengine.io/chats', {
        method: 'GET',
        headers: authObject,
      });

      if (response.ok) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();
        setError('');
      } else {
        setError('Oops, incorrect credentials.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while logging in.');
    }
  };

  return (
    <div className="App">
      <Navbar/>
    <div className="wrapper">
      <div className="form">
        <h1 className="title" style={{ color: "#1a2a6c" }}>Welcome to our Communtiy</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LoginForm;

