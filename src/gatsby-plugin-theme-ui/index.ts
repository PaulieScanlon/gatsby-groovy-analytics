const theme = {
  colors: {
    text: '#ffffff',
    background: '#ffffff',
    primary: '#ec008d',
    secondary: '#fff301',
    tertiary: '#40c8f3',
    highlight: '#fb5c2b',
    error: '#fc1b1b',
    success: '#41cd53',
    black: '#000000',
    black1: '#211e21',
    black2: '#251b25',
    black3: '#3d313b',
    black4: '#392e37',
    grey: '#d1d1d1',
    grey1: '#eaeaea',
    grey2: '#f3f2f2',
    grey3: '#f7f7f7',
    grey4: '#999999',
    three: {
      background: '#000000',
      sphere: '#3d313b',
      marker: '#fff301',
      geometry: '#ec008d',
      graticule: '#392e37',
    },
  },

  fonts: {
    heading: 'GvTime-Regular',
    body: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    alt: 'Circula-Medium',
  },

  fontWeights: {
    heading: 700,
    body: 400,
    bold: 700,
  },

  lineHeights: {
    heading: '1.2em',
    body: '1.3em',
  },

  letterSpacings: [
    '0rem',
    '.1rem',
    '.15rem',
    '.25rem',
    '.35rem',
    '.45rem',
    '.55rem',
  ],

  fontSizes: ['.85rem', '1rem', '2rem', '3rem', '4rem', '5rem', '6rem'],

  shadows: {
    card: '0px 0px 30px -2px rgba(0,0,0,0.10)',
    focus: '0px 0px 1px 3px rgba(0,0,255,0.90)',
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      backgroundColor: 'black',
    },
    header: {
      position: 'fixed',
      width: 'full',
      height: 'header',
      display: 'flex',
      alignItems: 'center',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'grey1',
      py: 2,
      px: 3,
      backgroundColor: 'background',
    },
    main: {
      pt: (theme) => theme.sizes.header,
    },
  },

  text: {
    default: {
      lineHeight: 'body',
    },
    small: {
      fontSize: 0,
    },
    heading: {
      h1: {
        fontSize: [4, 6],
        letterSpacing: 6,
        '> span:not(:last-child)': {
          mr: '14px',
        },
        span: {
          '&::before': {
            WebkitTextStrokeWidth: '16px',
          },
        },
      },
      h2: {
        fontSize: 5,
        letterSpacing: 5,
        '> span:not(:last-child)': {
          mr: '14px',
        },
        span: {
          '&::before': {
            WebkitTextStrokeWidth: '15px',
          },
        },
      },
      h3: {
        fontSize: 4,
        letterSpacing: 4,
        '> span:not(:last-child)': {
          mr: '12px',
        },
        span: {
          '&::before': {
            WebkitTextStrokeWidth: '12px',
          },
        },
      },
      h4: {
        fontSize: 3,
        letterSpacing: 3,
        '> span:not(:last-child)': {
          mr: '10px',
        },
        span: {
          '&::before': {
            WebkitTextStrokeWidth: '9px',
          },
        },
      },
      h5: {
        fontSize: 2,
        letterSpacing: 2,
        '> span:not(:last-child)': {
          mr: '10px',
        },
        span: {
          '&::before': {
            WebkitTextStrokeWidth: '7px',
          },
        },
      },
      h6: {
        fontSize: 1,
        letterSpacing: 1,
        '> span:not(:last-child)': {
          mr: '8px',
        },
        span: {
          '&::before': {
            WebkitTextStrokeWidth: '5px',
          },
        },
      },
    },
  },

  radii: [8, 24, 48],

  buttons: {
    default: {
      borderRadius: 1,
      cursor: 'pointer',
      ':hover:not(:disabled)': {
        opacity: 0.9,
      },
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
      ':disabled': {
        color: 'grey4',
        cursor: 'not-allowed',
        backgroundColor: 'grey1',
      },
    },

    primary: {
      variant: 'buttons.default',
      backgroundColor: 'tertiary',
      color: 'black1',
      fontWeight: 'bold',
    },
  },

  cards: {
    primary: {
      borderRadius: 0,
      p: [3, 4],
      boxShadow: 'card',
    },
  },

  forms: {
    textarea: {
      borderRadius: 0,
      borderColor: 'transparent',
      backgroundColor: 'grey1',
      color: 'black',
      fontFamily: 'body',
      p: 3,
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
  },

  sizes: {
    container: 1140,
    canvas: 600,
    header: 64,
    full: '100%',
  },

  layout: {
    container: {
      px: [3, 4],
    },
  },

  zIndices: {
    canvas: -1,
  },
}

export default theme
