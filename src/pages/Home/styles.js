import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;

export const NoDishesMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
