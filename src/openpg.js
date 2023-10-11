import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { auth, provider } from "./components/Nav/config";
import { signInWithPopup } from "firebase/auth";
import image from './assets/logo1.jpg';
import './openpg.css';
import styled, { keyframes } from 'styled-components';

const HomePage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("name", data.user.displayName);
        console.log(data);
        navigate("/Home"); // redirect to home page on successful login
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const Img = styled.img`
    margin-bottom: 4rem;
    animation: ${keyframes`
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-1rem);
      }
      100% {
        transform: translateY(0);
      }
    `} 5s ease-in-out infinite;
  `;

  const Heading = styled.h1`
    color: white;
    margin-bottom: 2rem;
  `;

  const Lead = styled.p`
    color: white;
    margin-bottom: 5rem;
  `;

  const StyledButton = styled(Button)`
    background-color: #1E90FF;
    border-color: #1E90FF;
    &:hover, &:focus, &:active {
      background-color: #104E8B;
      border-color: #104E8B;
    }
  `;

  return (
    <Container fluid className="bg-dark-blue">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={8} lg={6} xl={4} className="py-5 text-center">
          <Img src={image} alt="Resilient-response" />
          <Heading className="display-4 fw-bold">Resilient-response</Heading>
          <Lead className="lead">Welcome to the Resilient-response app, where you can stay connected and informed during times of crisis.</Lead>
          <StyledButton
            variant="primary"
            className="mx-auto btn-grey"
            onClick={handleClick}
          >
           continue with Google
          </StyledButton>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
