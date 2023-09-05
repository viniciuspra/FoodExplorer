import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;

  > main {
    display: grid;
    grid-template-areas: "img content content" "img button .";
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > img {
      width: 8rem;
      grid-area: img;
    }

    > button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
      cursor: pointer;
      grid-area: button;
      margin-top: -3rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-area: content;
  font-family: "Poppins";
  gap: 0.5rem;

  > span {
    font-size: 2rem;
  }

  > h1 {
    font-size: 2rem;
    font-weight: 400;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
