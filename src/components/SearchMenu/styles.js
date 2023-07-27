import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  animation: ${slideIn} 0.3s forwards;
`;

export const CloseButtonWrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 2.8rem 2.6rem;
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

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 1rem 2.8rem;

  overflow-y: auto;
`;

export const InputWrapper = styled.div`
  padding: 3.6rem 0;
`;

export const ExitButton = styled.button`
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

  padding-bottom: 1rem;
`;

export const FooterWrapper =styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`