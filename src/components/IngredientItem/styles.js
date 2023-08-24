import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  

  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 1rem;

  > button {
    display: flex;
    align-items: center;

    margin-right: 5px;

    border: none;
    background: none;

    svg {
      border-radius: 50%;
      transition: all 0.3s;
      &:hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
  }

  > input {
    max-width: 10rem;
    height: 3.2rem;

    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`