import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #272A37;
    --secondary-color: #2089E7;
    --gray-color: #323644;
    --detailText-color: #878F9F;
    --white-color: #edede9;
    --red-color: #ef4444;

    font-family: 'Inter Tight', sans-serif;
    font-size: 16px;
    background-color: #272A37;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  *{ padding: 0; margin: 0; box-sizing: border-box }

  body {
    margin: 0 auto;
    max-width: 800px;
    min-height: 100vh;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }

  body::-webkit-scrollbar {
  display: none; /* Chrome, Safari e outros navegadores WebKit */
}

  button {
    font-family: 'Inter Tight', sans-serif;
    cursor: pointer;
  }
`;

export default GlobalStyle;