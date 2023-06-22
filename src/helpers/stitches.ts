import { createStitches } from '@stitches/react';

// breakpoints based on
// https://gs.statcounter.com/screen-resolution-stats/

const basicUnits = {
  1: '6px',
  2: '12px',
  3: '18px',
  4: '24px',
};

const { styled, css, keyframes } = createStitches({
  media: {
    sm: '(min-width: 358px)',
    md: '(min-width: 638px)',
    lg: '(min-width: 766px)',
    xl: '(min-width: 1364px)',
    xxl: '(min-width: 1918px)',
  },
  theme: {
    space: basicUnits,
    sizes: basicUnits,
  },
});

export {
  styled as customStyled,
  css as customCss,
  keyframes as customKeyframes,
};
