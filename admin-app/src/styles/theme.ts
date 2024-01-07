import { DefaultTheme } from 'styled-components';

export const colors = {
  PRIMARY: '#1a283e',
  PRIMARY_SOFT: '#04C09E',
  GRAY_100: '#F6F6F6',
  GRAY_200: '#DDDDDD',
  GRAY_300: '#ECEBF1',
  GRAY_400: '#94DACD',
  GRAY_500: '#ededed',
  GRAY_600: '#D2D2D2',
  YELLOW_800: '#CBBA64',
  BLACK_100: '#111111',
  BLACK_200: '#222',
  BLACK_300: '#333333',
  BLACK_350: '#383838',
  BLACK_400: '#525252',
  BLACK_500: '#737373',
  BORDER_COLOR: 'var(--boarder_color)',
  WHITE: '#FFFFFF',
  none: 'none',
  textDefault: '#ededed',
  bg: {
    primary: 'var(--bg_primary)',
    sub: 'var(--bg_sub)',
    card: 'var(--bg_card)',
    card_label: 'var(--bg_card_label)',
    side_primary: 'var(--bg_side_menu)',
  },
  mode: {
    primary: 'var(--primary)',
  },
};

export const zIndex = {
  DRAWER: 500,
  TOOLTIP_BOX: 400,
  HEADER: 300,
};

export type Colors = keyof typeof colors;

export interface MixinsTheme {
  flexRowsContainer: () => string;
  flexBox: (direction?: string, align?: string, justify?: string) => string;
}

const mixins: MixinsTheme = {
  flexRowsContainer: () => `
    display: flex;
    align-items: center;
    justify-content: center;

  `,
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};

export interface MediaQueryTheme {
  custom: (width: number) => string;
  mobile: string;
  tablet: string;
  pc: string;
}

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

const media: MediaQueryTheme = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(769),
  mobile: customMediaQuery(576),
};

const scroll = {
  theme: () => `
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #cdcdcd;
      border-radius: 0;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  `,
};

export const theme: DefaultTheme = {
  colors,
  zIndex,
  media,
  mixins,
  scroll,
} as const;
