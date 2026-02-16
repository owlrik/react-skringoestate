import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import PrimaryFontWoff2 from 'src/shared/assets/fonts/Poppins-Regular.woff2';
import PrimaryFontWoff from 'src/shared/assets/fonts/Poppins-Regular.woff';
import SecondaryFontWoff2 from 'src/shared/assets/fonts/VenusRising-Regular.woff2';
import SecondaryFontWoff from 'src/shared/assets/fonts/VenusRising-Regular.woff';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-display: swap;
    src:
      url(${PrimaryFontWoff2}) format("woff2"),
      url(${PrimaryFontWoff}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-display: swap;
    src:
      url(${SecondaryFontWoff2}) format("woff2"),
      url(${SecondaryFontWoff}) format("woff");
  }

  *,
  *::before,
  *::after {
    box-sizing : border-box;
  }

  html,
  body {
    min-height: 100vh;
  }

  html {
    font-size: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    min-width: 320px;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-style: normal;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => `rgba(${theme.color.primary}, 1)`};
    letter-spacing: 0.05em;
    overflow-wrap: break-word;
    background-color: ${({ theme }) => `rgba(${theme.color.inverse}, 1)`};
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  iframe {
    max-width: 100%;
  }
`;

export { GlobalStyle };
