import React from "react";
//style
import styled from "styled-components";
//Image
import bgShorten from "../../images/bg-shorten-desktop.svg";
import brandRecognition from "../../images/icon-brand-recognition.svg";
import detailRecord from "../../images/icon-detailed-records.svg";
import customizable from "../../images/icon-fully-customizable.svg";

const Short = () => {
  return (
    <Container>
      <Work>
        lorem isup lorem lorem isup lorem lorem isup lorem lorem isup lorem
        lorem isup lorem lorem isup lorem lorem isup lorem lorem isup lorem
        lorem isup lorem lorem isup lorem lorem isup lorem lorem isup lorem
        lorem isup lorem lorem isup lorem lorem isup lorem lorem isup lorem
        lorem isup lorem lorem isup lorem lorem isup lorem lorem isup lorem
        lorem isup lorem lorem isup lorem lorem isup lorem lorem isup
      </Work>
      <h1>Advanced Statistics</h1>
      <h3>Track how your links are performing across the web with</h3>
      <h3>our advanced statistics dashboard</h3>
      <CardDesign>
        <Card>
          <div className="circle">
            <img src={brandRecognition} alt="Recognition" />
          </div>
          <div>
            <h1>Brand Recognition</h1>
            <h3>
              Boost your brand recognition with each click. Generic links do not
              mean thing. Branded links helps instil confidence in your content.
            </h3>
          </div>
        </Card>
        <Dash></Dash>
        <Card className="card1">
          <div className="circle">
            <img src={detailRecord} alt="detail" />
          </div>
          <div>
            <h1>Brand Recognition</h1>
            <h3>
              Boost your brand recognition with each click. Generic links do not
              mean thing. Branded links helps instil confidence in your content.
            </h3>
          </div>
        </Card>
        <Dash></Dash>
        <Card className="card2">
          <div className="text">
            <div className="circle">
              <img src={customizable} alt="Recognition" />
            </div>
            <h1>Brand Recognition</h1>
            <h3>
              Boost your brand recognition with each click. Generic links do not
              mean thing. Branded links helps instil confidence in your content.
            </h3>
          </div>
        </Card>
      </CardDesign>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #bfbfbf;
  position: relative;
  h1 {
    margin-bottom: 10px;
  }
  h3 {
    font-size: 18px;
    color: #9e9aa7;
    letter-spacing: 0.05cm;
    font-weight: 700;
  }
`;

const Work = styled.div`
  position: relative;
  height: 150px;
  background-color: #3b3054;
  border-radius: 10px;
  background-image: url(${bgShorten});
  top: -75px;
`;

const CardDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  position: relative;
  .card1 {
    bottom: -40px;
  }
  .card2 {
    bottom: -80px;
  }
`;

const Card = styled.div`
  width: 300px;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  position: relative;
  h1 {
    font-size: 24px;
  }
  h3 {
    font-size: 14px;
    font-weight: 500;
  }
  .circle {
    width: 60px;
    height: 60px;
    position: relative;
    background-color: #3b3054;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -45px;
    margin-bottom: 15px;
  }
  .text {
    margin-bottom: 10px;
  }
`;

const Dash = styled.div`
  width: 35px;
  height: 10px;
  background-color: #2acfcf;
`;

export default Short;
