import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import App1 from "./Notify";
import CommunityPage from "./community";
import QRGenerator from "./Safety";
import Donation from "./Donation";
import MarkerMap from "./MarkerMap";
import EmergencyContacts from "./emer";
import SignIn from "./components/Nav/SignIn";
import HomePage from "./openpg";
import WeatherApp from "./weath";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Notify" element={<App1 />} />
        <Route path="/Safety" element={<QRGenerator />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/MarkerMap" element={<MarkerMap />} />
        <Route path="/emer" element={<EmergencyContacts />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/weath" element={<WeatherApp/>} />
      </Routes>
    </div>
  );
}

export default App;
