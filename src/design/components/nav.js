import React from "react";
//style
import styled from "styled-components";
//Image
import logo from "../../images/logo.svg";

const Nav = () => {
  return (
    <NavBar>
      <div>
        <img src={logo} alt="logo" />
        <List>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </List>
      </div>
      <List>
        <li>Login</li>
        <li>
          <button>Sign Up</button>
        </li>
      </List>
    </NavBar>
  );
};

const NavBar = styled.nav`
  width: 100%;
  min-height: 10vh;
  padding: 2rem 8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    width: 120px;
    height: 30px;
  }
  @media screen and (max-width: 375px) {
    padding: 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  font-size: 14px;
  font-weight: 700;
  color: #bfbfbf;
  padding: 0 1rem;
  li {
    padding: 0 1rem;
    button {
      width: 90px;
      height: 30px;
      border-radius: 50px;
      border: none;
      background-color: #2acfcf;
      font-family: "Poppins", sans-serif;
      color: white;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.5s ease;
    }
    button:hover {
      opacity: 0.6;
    }
  }
  li:hover {
    color: black;
    cursor: pointer;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export default Nav;
