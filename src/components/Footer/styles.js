import styled from "styled-components";
import { media } from "../../../breakpoints";

export const Container = styled.footer`
  width: 100%;
  height: 7rem;

  padding: 1.2rem 2.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  font-size: clamp(0.8rem, 0.5rem + 1vw, 1.6rem);

  ${media.greaterThan("mobile")`
    padding: 1.2rem 6.5rem;
  `}

  ${media.greaterThan("tablet")`
    padding: 1.2rem 10rem;
  `}

  > h3 {
    font-size: clamp(1.5rem, 0.7rem + 1vw, 2.5rem);
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    display: flex;
    align-items: center;
    gap: 0.5em;
  }
`;
