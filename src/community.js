import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const CommunitySupport = () => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new message to messages array
    const newMessage = { message, image };
    setMessages([...messages, newMessage]);
    setMessage('');
    setImage('');
    setShowMessage(true);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      {showMessage && (
        <Row>
          <Col>
            <div style={{ height: '400px', overflowY: 'scroll' }}>
              {messages.map((msg, index) => (
                <Alert key={index} variant="success" className="mt-3">
                  <p>{msg.message}</p>
                  {msg.image && (
                    <img
                      src={URL.createObjectURL(msg.image)}
                      alt="User uploaded"
                      style={{ maxWidth: '100%' }}
                    />
                  )}
                </Alert>
              ))}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CommunitySupport;

