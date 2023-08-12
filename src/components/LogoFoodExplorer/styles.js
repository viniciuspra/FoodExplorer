import styled from "styled-components";
import { media } from "../../configs/breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  > h1 {
    font-size: clamp(1rem, 0.5rem + 5vw, 3.1rem);
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    > span {
      font-size: clamp(1rem, 0.5rem + 1vw, 1.4rem);
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }
  ${media.greaterThan("mobile")`
  `}
`;
