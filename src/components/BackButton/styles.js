import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../configs/breakpoints";

export const Container = styled(Link)`
  width: 12rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;
  gap: 1rem;

  font-family: "Poppins", serif;
  font-size: clamp(1.5rem, 1.3rem + 1vw, 3.5rem);
  font-weight: 500;

  margin: 4rem 2.8rem 0;

  ${media.greaterThan('mobile')`
    margin-left: 4rem;
  `}
  ${media.greaterThan('desktop')`
    margin-left: 10rem;
  `}
`;
