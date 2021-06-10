import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
::-webkit-scrollbar {
  width: 0.5rem;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #23d997;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: grey;
}
html{
    @media (max-width: 1200px){
        font-size: 75%;
    }
}
body{
    background: 	white;
    overflow-x: hidden;
    font-size:18px;
    font-family: 'Poppins', sans-serif;
    
}
body>*{
    width: 100%;
}
`;

export default GlobalStyle;
