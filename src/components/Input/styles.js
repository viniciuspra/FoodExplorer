import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 0.6rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  padding: 0 1rem;

  > input {
  width: 100%;
  height: 4rem;

  font-size: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;
  border: 0;

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }}
`