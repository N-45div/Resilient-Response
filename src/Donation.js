import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function Donation() {
  const [donationItems, setDonationItems] = useState([
    { name: 'Food Gift Box : Which will include canned foods,chips,bread,milk etc', price: 10, quantity: 0 },
    { name: 'Clothes Gift Box : Which will include all the necessary clothes for male and female', price: 20, quantity: 0 },
    { name: 'Medical Help Gift Box : Which will include all the necessary medical items like bandage,emergency tablets etc', price: 30, quantity: 0 }
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
    <Container className="my-5">
      <h2>Introducing Gift Box Donation to the disaster torn needy</h2>
      <Row xs={1} md={2} lg={3}>
        {donationItems.map((item, index) => (
          <Col key={index} className="mb-4">
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
      <h3>Donation Summary : </h3>
      <Row>
        <Col>
          {donationItems.map((item, index) => (
            item.quantity > 0 && (
              <p key={index}>{item.name}: {item.quantity} x ${item.price} = ${item.price * item.quantity}</p>
            )
          ))}
        </Col>
        <Col>
          <h4>Total Cost</h4>
          <p>${totalCost}</p>
          <Button variant="primary" onClick={handleDonateNow}>Donate Now</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Donation;
