import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 10rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  > a > img {
    width: 8rem;
  }

  > main {
    > h1 {
      font-size: 1.6rem;
      font-weight: 500;
      font-family: "Poppins", serif;
    }

    > button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
`;
