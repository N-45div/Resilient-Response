import React from 'react';
import styled from 'styled-components';


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background-color: #0B3861;
  color: #FFFFFF;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Resilient-Response
      </div>
    </Nav>
  )
}

export default Navbar


