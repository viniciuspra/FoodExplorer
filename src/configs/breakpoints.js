import { generateMedia } from 'styled-media-query';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1025px',
};

export const media = generateMedia(breakpoints);