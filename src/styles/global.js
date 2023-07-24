import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;

    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer; 
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }  
`;

