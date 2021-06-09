import React from "react";
//style
import GlobalStyle from "./design/globalStyled";
//components
import Nav from "./design/components/nav";
import Intro from "./design/components/intro";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Intro />
    </div>
  );
}

export default App;
