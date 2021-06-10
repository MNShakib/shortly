import React from "react";
//style
import styled from "styled-components";
import GlobalStyle from "./design/globalStyled";
//components
import Nav from "./design/components/nav";
import Intro from "./design/components/intro";
import Short from "./design/components/urlShort";

function App() {
  return (
    <Main>
      <GlobalStyle />
      <Nav />
      <Intro />
      <Short />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
`;

export default App;
