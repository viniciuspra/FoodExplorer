import styled from "styled-components";
import { media } from "../../configs/breakpoints";

export const Container = styled.div`
  padding: 5rem 2.4rem 2rem;

  ${media.greaterThan("mobile")`
    padding: 6rem 4rem 3rem;
  `}
  
  ${media.greaterThan("tablet")`
    padding: 12rem 6.5rem 4rem;
  `}

  ${media.greaterThan("desktop")`
    padding: 16rem 10rem 6rem;
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
    margin-left: 0.1rem;

    ${media.greaterThan("mobile")`
      gap: 0.6rem;
      margin-left: 0.7rem;
    `}

    ${media.greaterThan("tablet")`
      gap: 0.6rem;
      margin-left: 9rem;
    `}

    ${media.greaterThan("desktop")`
      margin-left: clamp(15rem, 0.5rem + 20vw, 40rem);
    `}

    > h2 {
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;

      ${media.greaterThan("mobile")`
        font-size: clamp(2rem, 1.7rem + 1vw, 3rem);
      `}

      ${media.between("tablet", "desktop")`
        font-size: clamp(2.5rem, 2rem + 1vw, 4rem);
      `}

      ${media.greaterThan("desktop")`
        font-size: clamp(2rem, 2rem + 1.2vw, 4rem);
      `}
    }
    > p {
      font-size: clamp(0.5rem, 0.3rem + 1vw, 1.4rem);
      
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
