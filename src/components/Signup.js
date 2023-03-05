import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import './signup.css';

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

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="twitter-box">
        <div className="twitter-icon">
          <i className="fab fa-twitter"></i>
        </div>
        <div className="twitter-text">
          <h2>Create your account</h2>
          <form onSubmit={handleSignup}>
            <div className="signup-input">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="Enter your mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="signup-input">
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="signup-button"><Link to = "/Home1">Sign Up</Link></button>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

export default Signup;
