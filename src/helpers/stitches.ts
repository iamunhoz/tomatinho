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
    // from https://icolorpalette.com/638715_f35461_ea3132_fa4d44_24280b
    colors: {
      greenVidaLoca: '#638715',
      redCarnation: '#f35461',
      redAlizarinCrimson: '#ea3132',
      redSunsetOrange: '#fa4d44',
      greenBrownOnion: '#24280b',
    },
  },
});

export {
  styled as customStyled,
  css as customCss,
  keyframes as customKeyframes,
};
