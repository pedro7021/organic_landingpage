export const theme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    small: '0.6rem',
    medium: '1rem',
    large: '1.6rem',
  },
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      light: 300,
      normal: 400,
      bold: 600,
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      giant: '3.6rem',
      xgiant: '4.4rem',
      huge: '5.2rem',
    },
  },
  colors: {
    primary: '#128A22',
    secondary: '#40FF5A',
    darkBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF4040',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteSmall: '(max-width: 360px)',
  },
  contentWidth: {
    max: '96rem',
    content: '80rem',
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const;
