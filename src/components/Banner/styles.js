import styled from "styled-components";
import { media } from "../../../breakpoints";

export const Container = styled.div`
  padding: 4rem 2.4rem;
  ${media.greaterThan("tablet")`
    padding: 12rem 10rem;
  `}
`;

export const ContentWrapper = styled.div`
  height: 12rem;
  display: flex;
  gap: 16rem;
  padding: 1.6rem 0.5rem;
  border-radius: 0.5rem;

  background-image: linear-gradient(180deg, #091e26, #00131c);

  ${media.between("tablet", "desktop")`
    height: 20rem;
  `}

  ${media.greaterThan("desktop")`
    height: 28rem;
  `}

  position: relative;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    font-family: "Poppins", serif;

    ${media.between("tablet", "desktop")`
      gap: 0.6rem;
      margin-left: 8rem;
    `}

    ${media.greaterThan("desktop")`
      align-items: center;
      gap: 0.8rem;
      margin-left: 15rem;
    `}

    > h2 {
      font-size: clamp(1.2rem, 1rem + 1vw, 2.8rem);
      font-weight: 500;

      ${media.between("tablet", "desktop")`
        font-size: clamp(2.5rem, 2rem + 1vw, 4rem);
      `}

      ${media.greaterThan("desktop")`
        font-size: clamp(4rem, 3rem + 2vw, 5rem);
      `}
    }
    > p {
      font-size: clamp(1rem, 0.4rem + 1vw, 1.6rem);
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
