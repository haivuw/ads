import { createTheme } from '@material-ui/core';

export const BaseTheme = createTheme({
  props: {
    MuiButton: {
      disableElevation: true,
      variant: 'contained'
    }
  }
});
