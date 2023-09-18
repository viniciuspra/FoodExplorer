import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  grid-column: span 2;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 8px;
  padding: 16px;

  resize: none;
  border: none;
  border-radius: 10px;

  font-family: "Roboto", sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
