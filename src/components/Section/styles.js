import styled from 'styled-components';
import { media } from '../../../breakpoints';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
        background: linear-gradient(270deg, transparent, rgba(0, 10, 15, 0.4));
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
    margin: 2.4rem -25rem 0 10rem;
  `}

  > h2 {
    font-family: 'Poppins', serif;
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 2.4rem;
  }

  &:last-child {
    margin-bottom: 2.8rem;
  }
`

export const PrevArrowButton = styled.button`
  position: absolute;
  top: 50%;
  left: -5rem;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  background: none;
  border: none;
`;

export const NextArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 27rem;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  background: none;
  border: none;
`;

export const PrevArrowIcon = styled(ChevronLeft)`
  width: 4.8rem;
  height: 4.8rem;

  stroke: white;

  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  padding-right: 0.3rem;
`;

export const NextArrowIcon = styled(ChevronRight)`
  width: 4.8rem;
  height: 4.8rem;

  stroke: white;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding-left: 0.3rem;
`;
