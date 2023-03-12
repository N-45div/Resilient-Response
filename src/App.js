import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./components/Nav/Navbar";
import Notification from "./Notify";
import CommunityPage from "./community";
import QRGenerator from "./Safety";
import Donation from "./Donation";
import MarkerMap from "./MarkerMap";
import EmergencyContacts from "./emer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Notify" element={<Notification />} />
        <Route path="/Safety" element={<QRGenerator />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/MarkerMap" element={<MarkerMap />} />
        <Route path="/emer" element={<EmergencyContacts />} />
        <Route path="/community" element={<CommunityPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

