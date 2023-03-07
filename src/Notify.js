import React, { useState, useEffect } from 'react';
import "./notify.css";

function App() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=natural%20disaster&apiKey=020f4dff9f3e4a86be5d43cc11dd5ed2'
        );
        const data = await response.json();
        const newAlerts = data.articles.map((article) => ({
          id: article.title,
          title: article.title,
          description: article.description,
          url: article.url,
          imageUrl: article.urlToImage,
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
      const title = `New disaster alert: ${latestAlert.title}`;
      const options = {
        body: latestAlert.description,
        icon: latestAlert.imageUrl || '/path/to/default-icon.png',
      };
      const notification = new Notification(title, options);
      notification.addEventListener('click', () => {
        window.open(latestAlert.url, '_blank');
      });
      setTimeout(() => notification.close(), 5000); // Close notification after 5 seconds
    }
  }, [alerts]);

  const handleAlertClick = (alert) => {
    window.open(alert.url, '_blank');
  };

  return (
    <div>
      <h1>Disaster News Alert Notifications</h1>
      <div className="alert-container">
        {alerts.map((alert) => (
          <div className="alert-box" key={alert.id} onClick={() => handleAlertClick(alert)}>
            <h2>{alert.title}</h2>
            <p>{alert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;



