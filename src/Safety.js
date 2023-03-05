import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import earthquake from './assets/earthquake.jpg';
import hurricane from './assets/cyclone.jpg';
import tornado from './assets/tornado.jpg';
import flood from './assets/flood.jpg';
import wildfire from './assets/wildfire.jpg';
import './SafetyTips.css';

const SafetyTips = () => {
  return (
    <Container className="safety-container">
      <h1 className="text-center my-5">Safety Tips for Natural Disasters</h1>
      <Row>
        <Col md={6} lg={3} className="my-3">
          <Image src={earthquake} alt="earthquake" fluid className="disaster-img" />
          <h3 className="my-3">Earthquake Safety Tips</h3>
          <ul>
            <li>Find a safe spot and drop down to the ground</li>
            <li>Cover your head and neck with your hands and arms</li>
            <li>Hold on until the shaking stops</li>
            <li>Stay away from windows and objects that could fall</li>
          </ul>
        </Col>
        <Col md={6} lg={3} className="my-3">
          <Image src={hurricane} alt="hurricane" fluid className="disaster-img" />
          <h3 className="my-3">Hurricane Safety Tips</h3>
          <ul>
            <li>Evacuate if advised to do so</li>
            <li>Stay indoors and away from windows</li>
            <li>Secure outdoor objects</li>
            <li>Keep a supply of non-perishable food and water</li>
            <li>Charge electronic devices before the storm</li>
          </ul>
        </Col>
        <Col md={6} lg={3} className="my-3">
          <Image src={tornado} alt="tornado" fluid className="disaster-img" />
          <h3 className="my-3">Tornado Safety Tips</h3>
          <ul>
            <li>Find shelter in a basement or interior room</li>
            <li>Stay away from windows and exterior walls</li>
            <li>Cover your head with your arms or a pillow</li>
            <li>Listen to local news or radio for updates</li>
          </ul>
        </Col>
        <Col md={6} lg={3} className="my-3">
          <Image src={flood} alt="flood" fluid className="disaster-img" />
          <h3 className="my-3">Flood Safety Tips</h3>
          <ul>
            <li>Avoid driving or walking through floodwaters</li>
            <li>Turn off electricity and gas if instructed to do so</li>
            <li>Move to higher ground if possible</li>
            <li>Stay tuned to local news or radio for updates</li>
          </ul>
        </Col>
        <Col md={6} lg={3} className="my-3">
          <Image src={wildfire} alt="wildfire" fluid className="disaster-img" />
          <h3 className="my-3">Wildfire Safety Tips</h3>
          <ul>
            <li>Pay attention to weather conditions.</li>
            <li>Make sure you have an emergency plan.</li>
            <li>Use fire-resistant roofing and siding materials.</li>
            <li>Create a defensible space around your home</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SafetyTips;
