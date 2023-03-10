import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0B3861;
  padding: 20px;
  font-size: 14px;
  color: #FFFFFF;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIconLink = styled.a`
  color: #FFFFFF;
  margin-right: 10px;

  &:hover {
    color: #CCCCCC;
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

