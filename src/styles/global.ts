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

    background-color: ${({ theme }) => theme.colors['base-background']};

    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
  }

  button {
    border: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    appearance: textfield;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-button']}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors['purple-500']}
  }
`;
