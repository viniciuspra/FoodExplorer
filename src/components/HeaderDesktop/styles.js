import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 3rem 10rem;

  z-index: 1000;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
  }

  > h1 {
    display: flex;
    align-items: center;
    gap: 0.8rem;


    font-size: 2.4rem;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  padding: 0 3.2rem;
`