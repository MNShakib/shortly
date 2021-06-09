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
        <img src={working} />
      </Image>
    </Container>
  );
};

const Container = styled.section`
  padding: 2rem 0 1.5rem 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
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
`;
const Image = styled.div`
  width: 50%;
`;

export default Intro;
