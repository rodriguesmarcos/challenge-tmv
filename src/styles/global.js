import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  #root {
    margin: 0 auto;
    max-width: 900px;
    padding: 0 20px 50px;
    width: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.smokyBlack};
    color: ${({ theme }) => theme.colors.platinum};
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
