import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaDonate } from 'react-icons/fa';
import styled from 'styled-components';
import Navbar from './components/Nav/Navbar';
import Footer from './Footer';
import image from './assets/logo2.jpg';

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentContainer = styled(Container)`
  padding: 2rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const DonationButton = styled(Button)`
  background-color: #3c64b1;
  border: none;
  &:hover {
    background-color: #2c4681;
  }
`;

const DonateWithoutMoneyContainer = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const GiftBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
`;

const GiftBoxItem = styled.div`
  width: 300px;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const GiftBoxImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const DisasterGiftBoxPage = () => {
  return (
    <div className="App">
      <Navbar/>
    <MainContainer>
    <h1 style={{ color: "#1a2a6c" }}>Disaster Gift Box Donation</h1>
      <ContentContainer>
        <h3>Choose a Gift Box to Donate</h3>
        <p>Each gift box contains essential items that will help disaster survivors get through the toughest times.</p>
        <GiftBoxContainer>
          <GiftBoxItem>
            <GiftBoxImage src= {image} alt="Gift Box 1" />
            <h4>Food and Water Box</h4>
            <p>This box contains non-perishable food items and bottled water.</p>
            <DonationButton>Donate Now</DonationButton>
          </GiftBoxItem>
          <GiftBoxItem>
            <GiftBoxImage src={image} alt="Gift Box 2" />
            <h4>Clothing Box</h4>
            <p>This box contains new or gently used clothing items and blankets.</p>
            <DonationButton>Donate Now</DonationButton>
            </GiftBoxItem>
</GiftBoxContainer>
<FormContainer>
<h3>Donate Without Money</h3>
<InputField type="text" placeholder="Your Name" />
<InputField type="email" placeholder="Your Email" />
<InputField type="text" placeholder="Your Address" />
<DonateWithoutMoneyContainer>
<p>If you don't have money to donate, you can still help by volunteering or spreading awareness about the disaster.</p>
<p>For more information, visit our website.</p>
</DonateWithoutMoneyContainer>
<Button variant="secondary" type="submit">
<FaDonate /> Donate Without Money
</Button>
</FormContainer>
</ContentContainer>
</MainContainer>
<Footer/>
</div>
);
};

export default DisasterGiftBoxPage
