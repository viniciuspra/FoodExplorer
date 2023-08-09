import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  border: none;
  outline: none;

  padding: 1rem 2.5rem;

  border-radius: 0.3rem;

  font-family: "Poppins", serif;
  font-size: clamp(1.1rem, 0.5rem + 1vw, 1.6rem);

  background-color: ${({ theme, $isblack }) => $isblack ? theme.COLORS.DARK_800 : theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:hover {
    background-color: ${({ theme, $isblack }) => $isblack ? theme.COLORS.DARK_900 : theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    pointer-events: none;
    cursor: not-allowed;
  }
`;
