import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 12rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-family: "Poppins", serif;
  font-size: clamp(1.5rem, 1.3rem + 1vw, 3rem);
  font-weight: 500;
`;
