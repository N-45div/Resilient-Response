import React, { useState, useEffect } from 'react';
import "./notify.css";

function App() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch(
          'https://gnews.io/api/v4/search?q=natural+disaster&token=0c62c18d5f6eabfdcd1621ecc39bbcde'
        );
        const data = await response.json();
        const newAlerts = data.articles.map((article) => ({
          id: article.publishedAt,
          title: article.title,
          description: article.description,
          url: article.url,
          image: article.image?.thumbnail?.contentUrl,
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
      const title = `New disaster news alert: ${latestAlert.title}`;
      const options = {
        body: latestAlert.description,
        icon: latestAlert.image,
      };
      const notification = new Notification(title, options);
      notification.addEventListener('click', () => {
        window.open(latestAlert.url);
      });
      setTimeout(() => notification.close(), 5000); // Close notification after 5 seconds
    }
  }, [alerts]);

  const handleAlertClick = (alert) => {
    window.open(alert.url);
  };

  return (
    <div>
      <h1 className="heading">Real-time Disaster News Alert Notifications</h1>
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


