import styled from "styled-components";
import { media } from "../../configs/breakpoints";

export const Container = styled.div`
  max-width: 50rem;
  height: 100vh;

  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan('desktop')`
    max-width: 100vw;
    flex-direction: row;
    justify-content: space-around;

    > div:nth-child(1) {
      > h1 {
        font-size: clamp(4rem, 1rem + 3vw, 6rem);
        margin-left: 0.5rem;
      }

      > svg {
        width: clamp(4rem, 1rem + 3vw, 6rem);
        height: clamp(4rem, 1rem + 3vw, 6rem);
      }
    }
  `}
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin-top: 5rem;
  padding: 0 5.6rem;

  > label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  > a {
    font-family: "Poppins", serif;
    font-size: clamp(1.6rem, 1rem + 1vw, 2rem);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
  }

  ${media.greaterThan('desktop')`
    width: clamp(35rem, 20rem + 20vw, 80rem);
    padding: clamp(3rem, 3vw, 10rem) 5.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
    justify-content: center;

    margin-top: 0;

    > h1 {
      font-family: "Poppins", serif;
      text-align: center;
      font-size: 3.2rem;
      font-weight: 400;
    }
  `}
`;
