import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';


function Donation() {
  const [donationItems, setDonationItems] = useState([
    { name: 'Food Gift Box', price: 5, quantity: 0 },
    { name: 'Clothes Gift Box', price: 7, quantity: 0 }
  ]);

  const [totalCost, setTotalCost] = useState(0);

  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    const newDonationItems = [...donationItems];
    newDonationItems[index].quantity = newQuantity;
    setDonationItems(newDonationItems);
  };

  const handleDonateNow = () => {
    const newTotalCost = donationItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalCost(newTotalCost);
  };

  return (
    <div style={{ background: '#F5F5F5', color: '#0B3861' }}>
      <Container className="my-5">
        <h2>Delivering hope through your gift: Disaster relief box.</h2>
        <Row xs={1} sm={2} md={3} lg={3}>
          {donationItems.map((item, index) => (
            <Col key={index} className="mb-4" xs={12} sm={3} md={2}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Form>
                    <Form.Group controlId={`quantity-${index}`}>
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control type="number" min="0" value={item.quantity} onChange={(event) => handleQuantityChange(index, event)} />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <hr />
        <h6>Donation Summary : </h6>
        <Row>
          <Col xs={12} md={6}>
            {donationItems.map((item, index) => (
              item.quantity > 0 && (
                <p key={index}>{item.name}: {item.quantity} x ${item.price} = ${item.price * item.quantity}</p>
              )
            ))}
          </Col>
          <Col xs={12} md={6}>
            <h4>Total Cost</h4>
            <p>${totalCost}</p>
            <Button variant="primary" onClick={handleDonateNow}>Donate Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Donation;


