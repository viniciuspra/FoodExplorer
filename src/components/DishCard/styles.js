import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  width: clamp(20rem, 12rem + 10vw, 28rem);
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.6rem;

  padding: 3rem 2.4rem;

  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }
`;

export const LinkWrapper = styled(Link)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: clamp(0.3rem, 0.2rem + 1vw, 1.2rem);
    color: ${({ theme }) => theme.COLORS.WHITE};

    > a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 20%;
      
    > img {
      width: clamp(8rem, 4rem + 10vw, 15rem);
    }
    > h2 {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      font-size: clamp(1.5rem, 0.5rem + 1vw, 2.5rem);
      text-decoration: none;
    }

    > span {
      display: flex;
      align-items: center;
      font-size: clamp(1.5rem, 0.4rem + 1vw, 2.5rem);
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }
`;

export const Paragraph = styled.div`
  max-width: 25rem;
  font-size: 1.2rem;
  text-align: center;
  overflow: hidden; 
  text-overflow: ellipsis;
`