import React from "react";
//style
import styled from "styled-components";
//Image
import bgBoost from "../../images/bg-boost-desktop.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-pinterest.svg";
import pin from "../../images/icon-pinterest.svg";
import insta from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <Foot>
      <Boost>
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </Boost>
      <Content>
        <Column className="design">
          <h2>Shortly</h2>
        </Column>
        <Column className="design1">
          <Column>
            <ul>
              <li className="head">Features</li>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </Column>
          <Column>
            <ul>
              <li className="head">Resources</li>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </Column>
          <Column>
            <ul>
              <li className="head">Company</li>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </Column>
          <Column>
            <ul className="icons">
              <li>
                <img src={facebook} alt="Facebook" />
              </li>
              <li>
                <img src={twitter} alt="Twitter" />
              </li>
              <li>
                <img src={pin} alt="Pinterest" />
              </li>
              <li>
                <img src={insta} alt="Instagram" />
              </li>
            </ul>
          </Column>
        </Column>
      </Content>
    </Foot>
  );
};

const Foot = styled.footer`
  background-color: #232127;
`;
const Boost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  height: 220px;
  background-color: #3b3054;
  background-image: url(${bgBoost});
  button {
    width: 200px;
    height: 50px;
    margin-top: 20px;
    border-radius: 50px;
    border: none;
    background-color: #2acfcf;
    font-family: "Poppins", sans-serif;
    color: white;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  button:hover {
    opacity: 0.6;
  }
`;
const Content = styled.div`
  padding: 4rem 8rem 5rem 8rem;
  display: flex;
  justify-content: space-evenly;
  color: white;
  li {
    list-style: none;
    font-size: 14px;
    color: #9e9aa7;
    line-height: 0.9cm;
  }
  .head {
    font-size: 18px;
    color: white;
    margin-bottom: 5px;
  }
  .icons {
    display: flex;
    flex-direction: row;
    li {
      padding-left: 1rem;
    }
  }
  .design {
    width: 40%;
  }
  .design1 {
    width: 60%;
  }
`;
const Column = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export default Footer;
