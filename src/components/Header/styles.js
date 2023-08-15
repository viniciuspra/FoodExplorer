import styled from "styled-components";
import { media } from "../../configs/breakpoints";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 2.8rem 2.4rem;

  ${media.greaterThan("mobile")`
    padding: 5.6rem 4rem 2.4rem;
  `}

  ${media.greaterThan("desktop")`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 3rem 10rem;
  `}

  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
`

export const InputWrapper = styled.div`
  flex: 1;
  padding: 0 3.2rem;
`

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
