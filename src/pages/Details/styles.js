import styled from "styled-components";
import { media } from "../../configs/breakpoints";

export const Container = styled.div`
  height: 80vh;

  > a:nth-child(2) {
    margin: 2.4rem 2.4rem 0;

    ${media.greaterThan("mobile")`
      margin: 2.8rem 4rem 0;
    `}
    ${media.greaterThan("desktop")`
      margin: 2.8rem 10rem;
    `}
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  margin: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-align: center;
  font-family: "Poppins", serif;

  color: ${({ theme }) => theme.COLORS.WHITE_300};

  ${media.greaterThan("mobile")`
    margin: 2.4rem 4rem;
  `}
  ${media.greaterThan("desktop")`
    width: clamp(90rem, 1vw, 120rem);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    > img {
      width: clamp(35rem, 5vw, 40rem);
      margin: auto 0;
    }

    > div {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: flex-start;
      gap: 2rem;
      margin-left: 4rem;
      text-align: left;

      padding: 2rem;

      > h3 {
        font-size: 4rem;
      }
      > p {
        font-size: 2rem;
      }
    }
  `}


  > img {
    max-width: 35rem;
  }

  h3 {
    font-size: 2.7rem;
    font-weight: 500;
  }
  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    list-style: none;
    font-size: 1.3rem;
    font-weight: 500;
    > li {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      border-radius: 0.4rem;
      margin-top: 1rem;
      padding: 0.5rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 30rem;
  margin: auto;
  margin-top: 2.4rem;

  ${media.greaterThan("desktop")`
    width: 100%;
    margin: 2.4rem;
  `}
`;
