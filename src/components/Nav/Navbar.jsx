import React, { useState, useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { Button } from "bootstrap";

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
  `;

  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Nav>
      <div className="logo">Resilient-Response</div>
      {value ? (
        <button
          className="btn btn-primary"
          style={{ color: "white" }}
          onClick={logout}
        >
          LogOut
        </button>
      ) : (
        <button
          className="btn btn-primary"
          style={{ color: "white" }}
          onClick={handleClick}
        >
          LogIn
        </button>
      )}
    </Nav>
  );
}

export default Navbar;
