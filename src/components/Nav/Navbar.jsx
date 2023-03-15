import React from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const Nav = styled.nav`
    width: 100%;
    height: 55px;
    background-color: #0b3861;
    color: #ffffff;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-weight: bold;
      font-size: 1.2rem;
      padding: 10px;
    }

    .user-info {
      display: flex;
      align-items: center;
    }

    .user-icon {
      font-size: 1.5rem;
      cursor: pointer;
      color: white;
      margin-right: 10px;
    }

    .user-greeting {
      font-size: 1.2rem;
      font-weight: bold;
      color: white;
      text-transform: capitalize;
    }

    .logout-icon {
      font-size: 1.5rem;
      cursor: pointer;
      color: white;
      margin-left: 10px;
    }
  `;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Nav>
      <span className="user-greeting">Hi, {localStorage.getItem("name")}</span>
      <div className="user-info">
        <span className="logout-icon" onClick={logout}><FaSignOutAlt /></span>
      </div>
    </Nav>
  );
}

export default Navbar;

