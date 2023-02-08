import { css, type Theme } from '@emotion/react';

export const globalStyles = (theme: Theme) => css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    position: relative;
    background-color: ${theme.colors.bkgMain};
    font-family: ${theme.fontFamily.Nunito};
    font-weight: ${theme.fontWeights.body2};
    color: ${theme.colors.mainDark};

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      display: none;
      transition: all 1s ease-in-out;
      height: 100%;
      background: url(${theme.frames.bkgFrame});

      ${theme.minMq('md')} {
        display: block;
        width: ${theme.widths.bkgFrameMd};
      }

      ${theme.minMq('lg')} {
        width: ${theme.widths.bkgFrameLg};
      }

      ${theme.minMq('xl')} {
        width: ${theme.widths.bkgFrameXl};
      }
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
      transform: scaleX(-1);
    }
  }
`;
