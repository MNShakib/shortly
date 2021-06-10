import React from "react";

const Links = ({ url, shortenUrl }) => {
  return (
    <Links>
      <h3>{url}</h3>
      <span>
        <p>{shortenUrl}</p>
        <button>copy</button>
      </span>
    </Links>
  );
};

const Links = styled.div`
  width: 100%;
  height: 80px;
  background: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-bottom: 10px;
  h3 {
    color: black;
  }
  span {
    color: #2acfcf;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    p {
      padding-right: 1rem;
    }
  }
  button {
    width: 150px;
    height: 50px;
    border-radius: 10px;
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

return Links;
