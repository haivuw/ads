import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import MainRouter from 'routers';
//-------------------------------------

let theme = createMuiTheme({
  palette: {
  },
  typography: {
    fontFamily: 'Noto Sans JP',
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 400,
    },
  },
  overrides: {
  },
});

theme = responsiveFontSizes(theme);
const App = React.memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRouter />
    </ThemeProvider>
  );
});

export default App;
