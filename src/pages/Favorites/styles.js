import styled from "styled-components";
import { media } from "../../configs/breakpoints";

export const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;

  > main {
    padding: 2.8rem;
  }

  > h1 {
    padding: 3.5rem 2.8rem 0;
    font-family: "Poppins", serif;
    font-weight: 500;
  }

  ${media.greaterThan("mobile")`
    > h1 {
      padding: 5rem 4rem 0;
    }
    > main {
      column-count: 2;
      column-gap: 2.8rem;
      padding: 2.8rem;
      height: 100%;
    }
  `}

  ${media.greaterThan("desktop")`
    > h1 {
      padding: 5rem 10rem 0;
    }
    > main {
      column-count: 3; 
      column-gap: 3.5rem;
      padding: 3rem 10rem;
    }
  `}
  
  > main > div {
    break-inside: avoid;
    break-before: always;
    margin-bottom: 2.8rem;
  }
`;
