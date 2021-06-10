import React, { useState } from "react";
//style
import styled from "styled-components";
//Image
import bgShorten from "../../images/bg-shorten-desktop.svg";
import brandRecognition from "../../images/icon-brand-recognition.svg";
import detailRecord from "../../images/icon-detailed-records.svg";
import customizable from "../../images/icon-fully-customizable.svg";
//Axios
import axios from "axios";
//Components
import Links from "./link";

const Short = () => {
  const [urlLink, setUrl] = useState("");
  const [shortLink, setShortLink] = useState({ url: [], shortUrl: [] });

  console.log(shortLink);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (event.target.value == "") {
    } else {
      try {
        const shorten = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${urlLink}`
        );

        console.log(urlLink, shorten.data.result.full_short_link);
        setShortLink((prevState) => {
          return {
            url: [urlLink, ...prevState.url],
            shortUrl: [
              shorten.data.result.full_short_link,
              ...prevState.shortUrl,
            ],
          };
        });
        setUrl("");
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setUrl(event.target.value);
  };

  return (
    <Container>
      <Work>
        <form onSubmit={handleSubmit}>
          <input
            className="submitLink"
            type="text"
            value={urlLink}
            placeholder="Shorten a link here..."
            onChange={handleChange}
          />
          <input className="submitForm" type="submit" value="Shorten it!" />
        </form>
      </Work>
      {shortLink.url.length > 0 &&
        shortLink.url.map((val, idx) => (
          <Links url={val} shortenUrl={shortLink.shortUrl[idx]} />
        ))}

      <h1 className="stats">Advanced Statistics</h1>
      <h3>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </h3>
      <CardDesign>
        <Card>
          <div className="circle">
            <img src={brandRecognition} alt="Recognition" />
          </div>
          <div className="text">
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
          <div className="text">
            <h1>Brand Recognition</h1>
            <h3>
              Boost your brand recognition with each click. Generic links do not
              mean thing. Branded links helps instil confidence in your content.
            </h3>
          </div>
        </Card>
        <Dash></Dash>
        <Card className="card2">
          <div className="circle">
            <img src={customizable} alt="Recognition" />
          </div>
          <div className="text">
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
  padding: 0 8rem 8rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #bfbfbf;
  position: relative;
  h1 {
    margin-bottom: 10px;
    text-align: center;
  }
  h3 {
    font-size: 18px;
    color: #9e9aa7;
    letter-spacing: 0.05cm;
    font-weight: 700;
    text-align: center;
  }
  .stats {
    margin-top: 80px;
  }
  @media (max-width: 475px) {
    padding: 0 2rem;
  }
`;

const Work = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background-color: #3b3054;
  border-radius: 10px;
  background-image: url(${bgShorten});
  top: -75px;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    padding: 0 3rem;
    .submitLink {
      width: 78%;
      height: 50px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
      text-align: left;
      text-indent: 0.5cm;
    }
    input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .submitForm {
      width: 18%;
      margin-left: 10px;
      height: 50px;
      border-radius: 8px;
      background-color: #2acfcf;
      font-family: "Poppins", sans-serif;
      color: white;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      border: 0;
    }
    .submitForm:hover {
      opacity: 0.6;
    }
    @media (max-width: 999px) {
      .submitForm,
      .submitLink {
        width: 100%;
        margin-left: 0;
      }
      form {
        padding: 0;
      }
    }
  }
`;

// const Links = styled.div`
//   width: 100%;
//   height: 80px;
//   background: white;
//   border-radius: 5px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 2rem;
//   margin-bottom: 10px;
//   h3 {
//     color: black;
//   }
//   span {
//     color: #2acfcf;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: row;
//     p {
//       padding-right: 1rem;
//     }
//   }
//   button {
//     width: 150px;
//     height: 50px;
//     border-radius: 10px;
//     border: none;
//     background-color: #2acfcf;
//     font-family: "Poppins", sans-serif;
//     color: white;
//     font-size: 18px;
//     font-weight: 700;
//     cursor: pointer;
//     transition: all 0.5s ease;
//   }
//   button:hover {
//     opacity: 0.6;
//   }
// `;

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
  @media (max-width: 999px) {
    flex-direction: column;
    .card1 {
      bottom: 0px;
    }
    .card2 {
      bottom: 0px;
    }
    .text {
      text-align: center;
    }
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
  @media (max-width: 999px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Dash = styled.div`
  width: 35px;
  height: 10px;
  background-color: #2acfcf;
  @media (max-width: 999px) {
    width: 10px;
    height: 70px;
  }
`;

export default Short;
