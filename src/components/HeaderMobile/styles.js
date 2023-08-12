import styled from "styled-components";
import { media } from "../../configs/breakpoints";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 2.8rem 2.4rem;

  ${media.greaterThan("mobile")`
    padding: 5.6rem 4rem 2.4rem;
  `}

  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    cursor: pointer;
  }
`;

export const LogoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
