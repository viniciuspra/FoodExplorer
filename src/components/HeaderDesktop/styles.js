import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 3rem 10rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  padding: 0 3.2rem;
`