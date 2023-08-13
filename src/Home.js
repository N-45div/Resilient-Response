import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ban1 from './assets/26720.jpg';
import Navbar from './components/Nav/Navbar';
import Footer from './Footer';

const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

const BannerTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const BannerDescription = styled.p`
  font-size: 1rem;
  color: #FFFFFF;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const upAndDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AnimatedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${upAndDown} 3s ease infinite;
`;

const EarthyBackground = styled.div`
  background-color: #0B3861;
  height: 100vh;
  width: 100%;
`;


const Home = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const typingSpeed = 10000; // in milliseconds
  const typingStrings = [
    'A resilient response is the key to thriving. By embracing change, learning from challenges, and innovating in the midst of uncertainty.',
    'With courage, determination, and a commitment to positive action, we can weather any storm and emerge more resilient than ever before.',
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      setTypingIndex((prevIndex) => {
        if (prevIndex === typingStrings.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const typedString = typingStrings[typingIndex];

  return (
    <div className="App">
    <Navbar/>
    <EarthyBackground>
      <Banner>
        <AnimatedImage src={ban1} alt="animated banner" />
        <BannerContent>
          <BannerTitle>{typedString}</BannerTitle>
          <BannerDescription>
            Resilient Response is a disaster management system that focuses on building resilient communities that are prepared to withstand and recover from natural disasters. Our approach is rooted in the belief that a community that is well-prepared and well-equipped can respond effectively to natural disasters and minimize the damage and loss of life.
          </BannerDescription>
        </BannerContent>
      </Banner>
    </EarthyBackground>
    <Footer/>
    </div>

  );
};



export default Home;





