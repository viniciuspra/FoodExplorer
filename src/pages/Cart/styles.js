import styled from "styled-components";
import { media } from "../../configs/breakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  > main {
    flex-grow: 1;
    margin: 2.8rem;
  }

  ${media.greaterThan("mobile")`
    > main {
      margin: 4rem;
    }
  `}

  ${media.greaterThan("desktop")`
    > main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 4rem 10rem;
    }
  `}
`;

export const ContentWrapper = styled.div`
  > h1 {
    margin-bottom: 4rem;
  }

  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 4rem;

    > p {
      font-family: "Poppins", sans-serif;
      font-weight: 400;

      ${media.greaterThan("desktop")`
        font-size: 2rem;
      `}
    }

    > button {
      width: 15rem;
      align-self: flex-end;
    }
  }
`;
