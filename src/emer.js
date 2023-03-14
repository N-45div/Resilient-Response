import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/Nav/Navbar';
import Footer from './Footer';
import { FaPhoneAlt } from 'react-icons/fa';
import './emer.css';

const emergencyContacts = [
  { name: 'FEMA Disaster Assistance', number: '1-800-621-3362' },
  { name: 'American Red Cross', number: '1-800-733-2767' },
  { name: 'National Weather Service', number: '1-301-713-9142' },
  { name: 'National Hurricane Center', number: '1-305-229-4470' },
  { name: 'USGS Earthquake Hazards', number: '1-888-275-8747' },
  { name: 'National Tsunami Warning', number: '1-888-851-9350' }
];

const EmergencyContacts = () => {
  return (
    <div className="App">
      <Navbar />
      <Container fluid className="emergency-contacts-container py-5">
        <h2 style={{ color: "#1a2a6c" }}>Emergency contacts</h2>
        <Row className="justify-content-center">
          {emergencyContacts.map((contact, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="mb-4">
              <div className="contact-card">
                <div className="contact-icon-container">
                  <FaPhoneAlt className="contact-icon" />
                </div>
                <div className="contact-info-container">
                  <div className="contact-name">{contact.name}</div>
                  <div className="contact-number">
                    <a href={`tel:${contact.number}`} className="contact-link">
                      {contact.number}
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default EmergencyContacts;
