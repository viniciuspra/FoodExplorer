import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
  > h1 {
    font-size: clamp(1.3rem, 0.5rem + 5vw, 3.1rem);

    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    
    > span {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.CAKE_100}
    }
  }
`