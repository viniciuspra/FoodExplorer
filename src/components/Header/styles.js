import styled from "styled-components";
import { media } from "../../../breakpoints";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  
  z-index: 1000;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 2.8rem 2.4rem;

  ${media.greaterThan("mobile")`
    padding: 5.6rem 6.5rem 2.4rem;
  `}

  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 2.1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  > svg {
    cursor: pointer;
  }
`;

export const SearchWrapper = styled.div`
  overflow: hidden;
  height: 100;
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.6rem;
  font-family: "Poppins", serif;
  font-family: 300;

  cursor: pointer;
  outline: none;
`;
