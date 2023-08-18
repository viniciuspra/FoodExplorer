import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  right: -5rem;
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
