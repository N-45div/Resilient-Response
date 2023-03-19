import React from "react";
import {
  FaHome,
  FaUsers,
  FaHotel,
  FaDonate,
  FaPhone,
  FaHandPaper,
  FaCloud
} from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0b3861;
  padding: 2px;
  font-size: 35px;
  color: #ffffff;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
    flex-direction: column;
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SocialIconLink = styled.a`
  color: #ffffff;
  margin-right: 20px;

  &:hover {
    color: #cccccc;
  }

  @media only screen and (max-width: 768px) {
    margin-right: 15px;
    font-size: 35px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialIconLink href="/Home">
          <FaHome />
        </SocialIconLink>
        <SocialIconLink href="/community">
          <FaUsers />
        </SocialIconLink>
        <SocialIconLink href="/MarkerMap">
          <FaHotel />
        </SocialIconLink>
        <SocialIconLink href="/Donation">
          <FaDonate />
        </SocialIconLink>
        <SocialIconLink href="/emer">
          <FaPhone />
        </SocialIconLink>
        <SocialIconLink href="/weath">
          <FaCloud />
        </SocialIconLink>
        <SocialIconLink href="/Notify">
          <FaHandPaper />
        </SocialIconLink>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
