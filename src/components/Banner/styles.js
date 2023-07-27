import styled from "styled-components";
import { media } from "../../../breakpoints";

export const Container = styled.div`
  padding: 16rem 2.4rem 4rem;

  ${media.greaterThan("mobile")`
    padding: 18rem 9.5rem 10rem;
  `}
  
  ${media.greaterThan("tablet")`
    padding: 21rem 9.5rem 10rem;
  `}

  ${media.greaterThan("desktop")`
    padding: 26rem 10rem 12rem;
  `}

`;

export const ContentWrapper = styled.div`
  height: 12rem;
  display: flex;
  gap: 15rem;
  padding: 1.6rem 0.5rem;
  border-radius: 0.5rem;

  background-image: linear-gradient(180deg, #091e26, #00131c);

  ${media.between("tablet", "desktop")`
    height: 20rem;
  `}

  ${media.greaterThan("desktop")`
    padding: 0 3rem;
    height: 28rem;
    gap: 0rem;
  `}

  position: relative;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    text-align: center;

    font-family: "Poppins", serif;

    ${media.between("tablet", "desktop")`
      gap: 0.6rem;
      margin-left: 8rem;
    `}

    ${media.greaterThan("desktop")`
      width: 100%;
    `}

    > h2 {
      font-size: clamp(1.3rem, 0.7rem + 1vw, 2rem);
      font-weight: 500;

      ${media.between("tablet", "desktop")`
        font-size: clamp(2.5rem, 2rem + 1vw, 4rem);
      `}

      ${media.greaterThan("desktop")`
        font-size: clamp(3rem, 3rem + 1vw, 8rem);
      `}
    }
    > p {
      font-size: clamp(0.7rem, 0.3rem + 1vw, 1.4rem);
      
    }
  }
`;

export const ImgWrapper = styled.div`
  > img {
    position: absolute;
    top: -3rem;
    left: -3rem;
  }

  ${media.between("tablet", "desktop")`
      > img {
        width: 47.5rem;
        height: 29rem;
        top: -8rem;
        left: -11rem;
      }
  `}

  ${media.greaterThan("desktop")`
      > img {
        top: -11.9rem;
        left: -12.5rem;
      }
    `}
`;
