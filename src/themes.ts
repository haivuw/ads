import { createTheme } from '@material-ui/core';

export const BaseTheme = createTheme({
  palette: {
    primary: {
      main: '#2196f3'
    }
  },
  props: {
    MuiButton: {
      disableElevation: true,
      variant: 'contained'
    }
  }
});
