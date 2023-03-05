import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import gift from './assets/gift.jpg'; 
const DonationPage = () => {
  const [foodItems, setFoodItems] = useState([
    { name: 'Rice : Rice is a good source of energy, carbohydrates, and some essential vitamins and minerals. There are many varieties of rice, including long-grain, medium-grain, and short-grain, with each having its unique flavor and texture. It can be prepared in various ways, such as boiled, steamed, fried, or baked.', price: 10, checked: false },
    { name: 'Pulses : Pulses include a variety of beans, lentils, chickpeas, and peas, and they are a staple food in many parts of the world. They are also a popular meat substitute for vegetarians and vegans due to their high protein content.', price: 15, checked: false },
    { name: 'Canned goods : Canned goods are food products that have been processed, sealed in an airtight container, and then sterilized to extend their shelf life. They can be made from a variety of food items, including fruits, vegetables, meats, seafood, and soups.', price: 20, checked: false },
  ]);

  const [clothesItems, setClothesItems] = useState([
    { name: 'Shirts : Shirts are a type of clothing that typically covers the upper part of the body. They come in a wide range of styles, colors, and patterns, and can be made from a variety of materials such as cotton, silk, and polyester.', price: 25, checked: false },
    { name: 'Pants : Pants are a type of garment worn by both men and women. They typically cover the lower half of the body from the waist to the ankles, and come in a variety of styles such as jeans, slacks, khakis, leggings, and more. Pants can be made from a variety of materials, including denim, cotton, polyester, wool, and more. They are a versatile and practical clothing item that is worn all around the world.', price: 30, checked: false },
    { name: 'Jackets : Jackets are a type of outerwear designed to keep the wearer warm and protected from the elements.Bomber jacket a short, zippered jacket originally worn by pilots in the military, now popular in civilian fashion.', price: 40, checked: false },
  ]);

  const [totalCost, setTotalCost] = useState(0);

  const handleCheckboxChange = (e, index, items, setItems) => {
    const newItems = [...items];
    newItems[index].checked = e.target.checked;
    setItems(newItems);
  };

  const handleCalculateCost = () => {
    let cost = 0;
    foodItems.forEach(item => {
      if (item.checked) cost += item.price;
    });
    clothesItems.forEach(item => {
      if (item.checked) cost += item.price;
    });
    setTotalCost(cost);
  };

  const handlePayment = () => {// Replace with your calculated price
    const paymentURL = `https://yourpaymentgateway.com/pay?price=${totalCost}&currency=USD`;
    window.open(paymentURL, "_blank");
  }
  

  return (
    <Container>
      <h1 className="text-center mb-4">Introducing Gift box donation to the needy !</h1>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Food</Card.Title>
              <div class="gift-box">
                <img src={gift} alt="Gift Box" class="disaster-img" />
              </div>
              {foodItems.map((item, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={`${item.name} - $${item.price}`}
                  checked={item.checked}
                  onChange={e =>
                    handleCheckboxChange(e, index, foodItems, setFoodItems)
                  }
                />
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Clothes</Card.Title>
              <div class="gift-box">
                <img src={gift} alt="Gift Box" class="disaster-img" />
              </div>
              {clothesItems.map((item, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={`${item.name} - $${item.price}`}
                  checked={item.checked}
                  onChange={e =>
                    handleCheckboxChange(e, index, clothesItems, setClothesItems)
                  }
                />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button variant="primary" onClick={handleCalculateCost}>
          Calculate Total Cost
        </Button>
      </div>

      {totalCost > 0 && (
        <div className="text-center mt-4">
          <h2>Total Cost: ${totalCost}</h2>
          <Button variant="primary" onClick={handlePayment}>
            Donate Now !
          </Button>
        </div>
      )}
    </Container>
  );
};

export default DonationPage;
