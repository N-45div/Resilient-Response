import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  font-size: 14px;
  color: #555;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIconLink = styled.a`
  color: #555;
  margin-right: 10px;

  &:hover {
    color: #333;
  }
`;

const AppName = styled.p`
  margin: 0;
  font-weight: bold;
`;

function Footer() {
  return (
    <FooterContainer>
      <AppName>Resilient Response</AppName>
      <SocialLinks>
        <SocialIconLink href="https://twitter.com">
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink href="https://facebook.com">
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href="https://instagram.com">
          <FaInstagram />
        </SocialIconLink>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
