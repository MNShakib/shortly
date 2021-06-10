import React from "react";
//style
import styled from "styled-components";
//Image
import working from "../../images/illustration-working.svg";

const Intro = () => {
  return (
    <Container>
      <Text>
        <h1>More than just</h1>
        <h1> shorter links</h1>
        <h3>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h3>
        <button>Get Started</button>
      </Text>
      <Image>
        <img src={working} all="working" />
      </Image>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 2rem 0 1.5rem 8rem;
  margin-bottom: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
    padding: 1rem 0 1rem 1rem;
    text-align: center;
  }
`;
const Text = styled.div`
  width: 50%;
  font-size: 48px;
  font-weight: 700;
  h3 {
    font-size: 18px;
    color: #bfbfbf;
    letter-spacing: 0.05cm;
  }
  button {
    width: 200px;
    height: 50px;
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
  @media screen and (max-width: 750px) {
    width: 100%;
    font-size: 18px;
  }
`;
const Image = styled.div`
  width: 50%;
  img {
    width: 110%;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    img {
      width: 110%;
    }
  }
  overflow: hidden;
`;

export default Intro;
