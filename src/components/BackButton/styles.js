import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;
  gap: 1rem;

  font-family: "Poppins", serif;
  font-size: clamp(2rem, 1.5rem + 1vw, 3.5rem);
  font-weight: 500;

  margin: 4rem 2.4rem 0;
` 