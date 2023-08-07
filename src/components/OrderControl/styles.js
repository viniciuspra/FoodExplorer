import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  position: relative;
  cursor: pointer;
`;

export const OrderCount = styled.div`
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;