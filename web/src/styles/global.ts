import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100%;
  }

  body {
    background-color: #f5f7fb;
    -webkit-font-smoothing: antialiased !important;
  }

  body, button, input, textarea, select, label, option, ::placeholder {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 1.2;
    color: #000;
    font-size: 1.8rem;
  }
`;
