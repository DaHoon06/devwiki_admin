import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }


  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    /* font-size: 62.5%; */
    min-width: 320px;
  }

  body {
    color: var(--textDefault);
    background-color: ${({ theme }) => theme.colors.bg.primary};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    width: 100%;
    height: 100%;
    padding: 0;
    ${({ theme }) => theme.scroll.theme()}
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ${({ theme }) => theme.media.tablet} {
    .scroll {
      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }

  :root {
    --textDefault: #444343;
    --textWhite: #fff;
    --textPrimary: ${({ theme }) => theme.colors.PRIMARY};
    --textBlack000: #000;
    --textBlack100: #222;
    --textBlack200: #444343;
    --textGray000: #969696;
    --textGray100: #989898;
    --textGray200: #C6C6C6;
    --textRed000: #FF5050;
    --textGrayAndWhite: #bdbdbd;
    --textYellow: #edbe17;

    --primary: #1a283e;
  }


  html, body, body[data-theme="light"] {
    // major(theme)
    --primary: #1a283e;
    --blockquote: #FFE588;
    --secondary: #FFC700;
    --warning: #FF5050;
    --primary_opacity: rgba(0, 199, 174, 0.7);
    --error_opacity: rgba(255, 80, 80, 0.7);
    --warning_opacity: rgba(229, 175, 0, 0.7);

    // Typography - light
    --textDefault: #444343;
    --textWhite: #fff;
    --textPrimary: #1a283e;
    --textBlack000: #000;
    --textBlack100: #222;
    --textBlack200: #444343;
    --textGray000: #969696;
    --textGray100: #989898;
    --textGray200: #C6C6C6;
    --textRed000: #FF5050;
    --textGrayAndWhite: #bdbdbd;
    --textYellow: #edbe17;

    --boarder_color: #ededed;

    --logo_color: #222;

    --bg_primary: #fff;
    --bg_default: #04C09E;
    --bg_sub: #f5f5f8;
    --bg_card: #fff;
    --bg_card_label: #fff;
    --bg_side_menu: #FFFFFFC4;

    --active: #222;
    --unactive: #fff;
  }

  body[data-theme="dark"] {
    --primary: #778C86;
    --blockquote: #282828;
    --secondary: #FFC700;
    --warning: #FF533B;
    --primary_opacity: rgba(119, 140, 134, 0.7);
    --error_opacity: rgba(255, 80, 80, 0.7);
    --warning_opacity: rgba(255, 199, 0, 0.7);

    --boarder_color: #404751;

    // Typography - dark
    --textDefault: #fff;
    --textWhite: #fff;
    --textPrimary: #ADBAC7;
    --textBlack000: #000;
    --textBlack100: #222;
    --textBlack200: #f5f5f5;
    --textGray000: #969696;
    --textGray100: #A6A6A6;
    --textGray200: #C6C6C6;
    --textRed000: #FF5050;
    --textGrayAndWhite: #fff;
    --textYellow: #FFC700;

    --logo_color: #fff;

    --bg_primary: #1c2128;
    --bg_default: #ADBAC7;
    --bg_card: transperant;
    --bg_card_label: #2d333b;
    --bg_sub: #1c2128;
    --bg_side_menu: #1c2128;
    --active: #fff;
    --unactive: #222;
  }
`;
