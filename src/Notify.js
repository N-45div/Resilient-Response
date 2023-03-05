import React, { useState, useEffect } from 'react';
import "./notify.css";
function App() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch(
          'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
        );
        const data = await response.json();
        const newAlerts = data.features.map((feature) => ({
          id: feature.id,
          title: feature.properties.title,
          magnitude: feature.properties.mag,
          coordinates: feature.geometry.coordinates,
        }));
        setAlerts(newAlerts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAlerts();
    const intervalId = setInterval(fetchAlerts, 60000); // Refresh alerts every minute
    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  useEffect(() => {
    if (alerts.length > 0) {
      const latestAlert = alerts[0];
      const title = `Magnitude ${latestAlert.magnitude} earthquake alert`;
      const options = {
        body: latestAlert.title,
        icon: '/path/to/icon.png',
      };
      const notification = new Notification(title, options);
      notification.addEventListener('click', () => {
        // Handle notification click event
      });
      setTimeout(() => notification.close(), 5000); // Close notification after 5 seconds
    }
  }, [alerts]);

  const handleAlertClick = (alert) => {
    // Handle alert click event
  };

  return (
    <div>
      <h1>Real-time Disaster Alert Notifications</h1>
      <div className="alert-container">
        {alerts.map((alert) => (
          <div className="alert-box" key={alert.id} onClick={() => handleAlertClick(alert)}>
            <h2>{alert.title}</h2>
            <p>Magnitude: {alert.magnitude}</p>
            <p>Coordinates: {alert.coordinates.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
