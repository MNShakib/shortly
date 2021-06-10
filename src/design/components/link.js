import React, { useState } from "react";
//style
import styled from "styled-components";
//copy
import { CopyToClipboard } from "react-copy-to-clipboard";

const Links = ({ url, shortenUrl }) => {
  const [copy, setCopy] = useState({ value: "", copied: false });
  const copyHandler = () => {
    // navigator.clipboard.writeText(this.state.textToCopy);
    setCopy({ value: shortenUrl, copied: !copy.copied });
  };
  return (
    <Link>
      <span className="check">
        <h3>{url}</h3>
      </span>
      <span className="check1">
        <p>{shortenUrl}</p>
        {/* <button
          //   style="{{copy ? 'color: #35323e' : 'color: #2acfcf'}}"
          onClick={copyHandler}
        >
          {copy ? "Copied!" : "Copy"}
        </button> */}
        <CopyToClipboard
          className="copy"
          text={copy.value}
          onCopy={copyHandler}
          style={
            copy.copied
              ? { backgroundColor: "#35323e" }
              : { backgroundColor: "#2acfcf" }
          }
        >
          <span>{copy.copied ? "Copied!" : "Copy"}</span>
        </CopyToClipboard>
      </span>
    </Link>
  );
};

const Link = styled.div`
  width: 100%;
  height: 80px;
  background: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-bottom: 10px;
  .check {
    overflow: hidden;
  }
  h3 {
    color: black !important;
    overflow: hidden;
  }
  .check1 {
    color: #2acfcf;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    p {
      padding-right: 1rem;
    }
    padding-left: 1rem;
  }
  .copy {
    width: 150px;
    min-height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #2acfcf;
    font-family: "Poppins", sans-serif;
    color: white;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.5s ease;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .copy:hover {
    opacity: 0.6;
  }
  @media (max-width: 999px) {
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem;
    box-sizing: content-box;
    height: 100px;
    h3 {
      width: 80%;
      margin-top: 10px;
      font-size: calc(12px + 6 * ((100vw - 320px) / 680));
      border: 0;
    }
    .check1 {
      width: 100%;
      padding-top: 10px;
      border-top: solid 1px #9e9aa7;
    }
  }
  @media (max-width: 727px) {
    height: 160px;
    padding: 0;
    .check {
      width: 100%;
      margin: 10px 0;
      padding: 0px 12px 0 12px;
      overflow: hidden;
      border: none;
      h3 {
        width: 100%;
        margin-top: 0;
      }
    }
    .check1 {
      flex-direction: column;
      align-items: flex-start;
      p {
        padding-bottom: 10px;
      }
      .copy {
        width: 100%;
        padding: 0;
      }
      padding: 10px 12px 0 10px;
    }
  }
`;

export default Links;
