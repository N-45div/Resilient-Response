import React, { useState, useEffect } from 'react';
import "./notify.css";
import styled from 'styled-components';
import Navbar from './components/Nav/Navbar';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F5F5F5;
  padding: 1.5rem;
  font-size: 1rem;
  color: #333;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #0B3861;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const AlertContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AlertBox = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  width: 350px;
  margin: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: calc(100% - 1rem);
    margin: 0.5rem 0;
  }
`;

const AlertTitle = styled.h2`
  font-size: 1.25rem;
  color: #0B3861;
`;

const AlertDescription = styled.p`
  margin-top: 0.5rem;
`;


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
    <div className="App">
    <Navbar/>
    <Container>
      <Title>Disaster News</Title>
      <AlertContainer>
        {alerts.map((alert) => (
          <AlertBox key={alert.id} onClick={() => handleAlertClick(alert)}>
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertDescription>{alert.description}</AlertDescription>
          </AlertBox>
        ))}
      </AlertContainer>
    </Container>
    <Footer/>
    </div>
  );
}

export default App;











