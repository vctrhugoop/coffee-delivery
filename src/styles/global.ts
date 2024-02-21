import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    
  body {
    width: 100%;
    height: 100vh;
    -webkit-font-smoothing: antialiased;

    background-color: ${(props) => props.theme['base-background']};

    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
  }

  button {
    border: 0;
  }
`;
