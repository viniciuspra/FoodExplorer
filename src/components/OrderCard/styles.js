import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;

  > main {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.4rem;

    > img {
      width: 7.2rem;
    }

    > div {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > button {
        display: flex;
        justify-content: flex-start;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
        cursor: pointer;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Poppins";
  gap: 1rem;

  > span {
    font-size: clamp(1.3rem, 1.3rem + 1vw, 2rem);
  }

  > h1 {
    font-size: clamp(1.3rem, 1rem + 1vw, 2rem);
    font-weight: 400;
  }

  > p {
    font-size: clamp(1rem, 0.8rem + 1vw, 1.4rem);
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;