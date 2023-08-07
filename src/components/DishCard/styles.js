import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  width: clamp(20rem, 12rem + 10vw, 28rem);
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.6rem;

  padding: 2.4rem;

  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }
`;

export const ContentWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.3rem, 0.2rem + 1vw, 1.2rem);

  color: ${({ theme }) => theme.COLORS.WHITE};

  > img {
    width: clamp(8rem, 4rem + 10vw, 15rem);
  }

  > h2 {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: clamp(1.5rem, 0.9rem + 3vw, 2.5rem);
    text-decoration: none;
  }

  > span {
    display: flex;
    align-items: center;
    font-size: clamp(1.7rem, 0.6rem + 1vw, 2.5rem);
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }
`;
