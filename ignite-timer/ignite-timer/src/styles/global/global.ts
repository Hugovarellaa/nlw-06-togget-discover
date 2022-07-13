import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #333;
    color: #fff;
  }

  body, input, textarea, button {
    font-family: "Roboto" , sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`;