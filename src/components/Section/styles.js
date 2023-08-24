import styled from 'styled-components';
import { media } from '../../configs/breakpoints';

export const Container = styled.div`
  margin: 2.4rem -8rem 0 2.4rem;
  ${media.greaterThan('mobile')`
    margin: 2.4rem 2rem 0 4rem;
  `}
  ${media.greaterThan('tablet')`
    margin: 2.4rem -20rem 0 6.5rem;
    position: relative;
    > .slick-slider > div {
      &::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        background: linear-gradient(270deg, transparent, rgba(0, 10, 15, 0.7));
        top: 0;
        left: 0rem;
        pointer-events: none;
        z-index: 1;
      }

      &::after {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0, 10, 15, 1));
        top: 0;
        right: 0rem;
        pointer-events: none;
        z-index: 1;
      }
    }
  `}
  ${media.greaterThan('desktop')`
    margin: 2.4rem 10rem;
  `}

  > h2 {
    font-family: 'Poppins', serif;
    font-weight: 500;
    font-size: clamp(2rem, 1.5rem + 1vw, 3rem);
    margin-bottom: 2.4rem;
  }

  &:last-child {
    margin-bottom: 2.8rem;
  }
`