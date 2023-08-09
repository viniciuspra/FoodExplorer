import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

  display: flex;
  justify-content: baseline;

  font-family: "Poppins", serif;
  font-weight: 300;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding-bottom: 0.8rem;
`