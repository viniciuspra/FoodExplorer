import { generateMedia } from 'styled-media-query';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

export const media = generateMedia(breakpoints);