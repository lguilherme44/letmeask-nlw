import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem to equal 10px */
    scroll-behavior: smooth;
    animation-delay: 0.1s;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 54%;
    }
  }

  body {
    background: #2f323a;
    color: ${({ theme }) => theme.colors.grayDark};
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body, input, textarea, select, button {
    font: 400 1.6rem "Roboto", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
`;
