import React from 'react';
import { FaHome, FaUsers, FaHotel, FaNewspaper, FaDonate, FaPhone, FaQrcode } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0B3861;
  padding: 6px;
  font-size: 14px;
  color: #FFFFFF;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    flex-direction: column;
    justify-content: center;
  }
`;


const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SocialIconLink = styled.a`
  color: #FFFFFF;
  margin-right: 20px;

  &:hover {
    color: #CCCCCC;
  }

  @media only screen and (max-width: 768px) {
    margin-right: 10px;
    font-size: 20px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialIconLink href="/">
          <FaHome />
        </SocialIconLink>
        <SocialIconLink href="/community">
          <FaUsers />
        </SocialIconLink>
        <SocialIconLink href="/MarkerMap">
          <FaHotel />
        </SocialIconLink>
        <SocialIconLink href="/Notify">
          <FaNewspaper />
        </SocialIconLink>
        <SocialIconLink href="/Donation">
          <FaDonate />
        </SocialIconLink>
        <SocialIconLink href="/emer">
          <FaPhone />
        </SocialIconLink>
        <SocialIconLink href="/Safety">
          <FaQrcode />
        </SocialIconLink>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;


