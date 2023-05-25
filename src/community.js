import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import Navbar from './components/Nav/Navbar';
import Footer from './Footer';

import './style.css';

const projectID = '';

const CommunityPage = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div className="App">
      <Navbar/>
    <ChatEngine
      height="84vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    />
    <Footer/>
    </div>
  );
};


export default CommunityPage;


