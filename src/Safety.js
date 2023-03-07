import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './SafetyTips.css';
import earthquake from './assets/earthquake.jpg';
import f from './assets/flood.jpg';
import t from './assets/tornado.jpg';
import ts from './assets/tusami.jpg';
import fire from './assets/wildfire.jpg';
import hr from './assets/cyclone.jpg';
const SafetyTips = () => {
  return (
    <Container fluid className="safety-tips-page">
      <h1>Safety Tips</h1>
      <Row>
        <Col md={6}>
          <Card className="safety-tips-card">
            <Card.Body>
              <Card.Title>Earthquake Safety Tips</Card.Title>
              <img src={earthquake} alt="A small img" width="75" height="75" />
              <Card.Text>
                <ul>
                  <li>If you're indoors, drop to the ground, take cover under a sturdy desk or table, and hold on until the shaking stops. If you're outdoors, move away from buildings, streetlights, and utility wires and drop to the ground until the shaking stops.</li>
                  <li>Stay where you are until the shaking stops, and avoid going outside or using elevators.</li>
                  <li>Stay away from windows, glass doors, or other glass surfaces that can shatter during an earthquake.</li>
                  <li>Prepare an emergency kit with essentials such as water, non-perishable food, first-aid supplies, and a flashlight.</li>
                  <li> If you smell gas or hear a hissing sound, open a window and leave the building immediately. Do not use any electrical switches, appliances, or phones, as they can cause sparks that can ignite the gas.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="safety-tips-card">
            <Card.Body>
              <Card.Title>Flood Safety Tips</Card.Title>
              <img src={f} alt="A small img" width="75" height="75" />
              <Card.Text>
                <ul>
                  <li>Keep yourself informed about weather conditions and any flood warnings or advisories by watching the news or checking weather apps on your phone.</li>
                  <li>If you're ordered to evacuate, do so immediately. Don't wait until the last minute to leave.</li>
                  <li>Avoid walking or driving through flooded areas. Six inches of moving water can knock you down, and two feet of water can sweep away a vehicle.</li>
                  <li>Stay away from downed power lines and electrical wires. Report them to the utility company immediately.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="safety-tips-card">
            <Card.Body>
              <Card.Title>Tornado Safety Tips</Card.Title>
              <img src={t} alt="A small img" width="75" height="75" />
              <Card.Text>
                <ul>
                  <li>Identify a safe location in your home, workplace, or school where you can go in case of a tornado.</li>
                  <li>Stay informed about weather conditions by listening to your local news or weather station, or by using weather apps on your phone.</li>
                  <li>Prepare an emergency kit with essentials such as water, non-perishable food, first-aid supplies, and a flashlight.</li>
                  <li>If you're in a mobile home or a car, move to a sturdy building or a low-lying area. Do not try to outrun a tornado.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="safety-tips-card">
            <Card.Body>
              <Card.Title>Hurricane Safety Tips</Card.Title>
              <img src={hr} alt="A small img" width="75" height="75" />
              <Card.Text>
                <ul>
                  <li>Keep yourself informed about weather conditions by watching the news or checking weather apps on your phone. Be aware of the hurricane's projected path, intensity, and arrival time.</li>
                  <li>Prepare an emergency kit with essentials such as water, non-perishable food, first-aid supplies, and a flashlight. Make sure to have enough supplies for at least 3 days.</li>
                  <li>Avoid walking or driving through flooded areas. Six inches of moving water can knock you down, and two feet of water can sweep away a vehicle.</li>
                  <li>If you're not evacuating, stay in a secure, interior room on the lowest level of your home. Keep your emergency kit with you and stay away from windows and exterior walls.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="safety-tips-card">
            <Card.Body>
              <Card.Title>Wildfire Safety Tips</Card.Title>
              <img src={fire} alt="A small img" width="75" height="75" />
              <Card.Text>
                <ul>
                  <li>Create a defensible space around your home by clearing out any brush, dry leaves, or other flammable materials within 30 feet of your home.</li>
                  <li>Create an emergency plan and discuss it with your family. Plan a meeting spot in case you need to evacuate, and designate someone outside the affected area as a point of contact.</li>
                  <li>Keep yourself informed about weather conditions and any evacuation orders by watching the news or checking weather apps on your phone.</li>
                  <li>If you're ordered to evacuate, do so immediately. Don't wait until the last minute to leave.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="safety-tips-card">
            <Card.Body>
              <Card.Title>Tsunami Safety Tips</Card.Title>
              <img src={ts} alt="A small img" width="75" height="75" />
              <Card.Text>
                <ul>
                  <li>Keep yourself informed about weather conditions and any tsunami warnings or advisories by watching the news or checking weather apps on your phone.</li>
                  <li>Be aware of the signs of a tsunami, such as a sudden rise or fall in sea level, or a loud roar coming from the ocean.</li>
                  <li>If you're in a coastal area and a tsunami warning has been issued, evacuate to higher ground immediately. Follow the instructions of local authorities and go to designated evacuation routes or shelters.</li>
                  <li>If you're unable to evacuate or move to higher ground, climb to the roof of a sturdy building and wait for rescue. Do not try to swim or wade through floodwaters.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SafetyTips;
