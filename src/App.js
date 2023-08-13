import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from './components/Loading';


const Home = React.lazy(() => import('./Home'));
const CommunityPage = React.lazy(() => import('./community'));
const DisasterGiftBoxPage = React.lazy(() => import('./Donation'));
const MarkerMap = React.lazy(() => import('./MarkerMap'));
const EmergencyContacts = React.lazy(() => import('./emer'));
const SignIn = React.lazy(() => import('./components/Nav/SignIn'));
const HomePage = React.lazy(() => import('./openpg'));
const WeatherApp = React.lazy(() => import('./weath'));
const App1 = React.lazy(() => import('./Notify'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Notify" element={<App1 />} />
        <Route path="/Donation" element={<DisasterGiftBoxPage />} />
        <Route path="/MarkerMap" element={<MarkerMap />} />
        <Route path="/emer" element={<EmergencyContacts />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/weath" element={<WeatherApp/>} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
