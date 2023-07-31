import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 0.6rem;
`

export const Wrapper = styled.div `
  width: clamp(26.5rem, 20%, 35rem);
  display: flex;
  align-items: center;
  gap: 1rem;
  
  margin: auto;
  padding-left: 0.5rem;

  > input {
  width: 100%;
  height: 4rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;
  border: 0;

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }}
`