import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'DM Serif Display', serif;
    font-size: 16px;
    /* font-family: 'Inter Tight', sans-serif; */
    background-color: #272A37;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    @media (max-width: 800px) {
      overflow: hidden;
    }
  }

  body {
    margin: 0 auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    font-family: 'Inter Tight', sans-serif;
    cursor: pointer;
  }
`;

export default GlobalStyle;