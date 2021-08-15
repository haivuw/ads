import { createTheme } from '@material-ui/core';

export const BaseTheme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B'
    }
  },
  props: {
    MuiButton: {
      disableElevation: true,
      variant: 'contained'
    }
  }
});
