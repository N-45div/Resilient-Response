import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Nav/Navbar";
import Footer from "./Footer";
import { ChatSettingsTop } from "react-chat-engine";
import "./style.css";

const projectID = ""; //write the projectid of the maintainers

const CommunityPage = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="App">
      <Navbar />
      {console.log(localStorage.getItem("username"))}
      <ChatEngine
        height="84vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        // userName="Akangkha"
        // userSecret="Aksar2410,.;"
      />

      <Footer />
    </div>
  );
};

export default CommunityPage;
