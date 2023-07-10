import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const StyleThemeProvider = (props) => {
  const useTheme = createTheme({
    palette: {
      primary: {
        main: '#8F43EE',
      },
      secondary: {
        main: '#0E1525',
      },
      background: {
        default: '#0E1525',
        paper: '#2B3245',
      },
      text: {
        primary: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Poppins',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 900,
      button: {
        textTransform: 'none',
        fontWeight: '500'
      },
    },
    shape: {
      borderRadius: 5,
    },
  });

  return (
    <ThemeProvider theme={useTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default StyleThemeProvider;
