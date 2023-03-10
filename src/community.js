import { ChatEngine } from 'react-chat-engine';

//import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './style.css';

const projectID = '72d8d715-2e67-475d-8f2f-8b0929b92971';

const CommunityPage = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    />
  );
};

// infinite scroll, logout, more customizations...

export default CommunityPage;


