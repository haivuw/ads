import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  })
);

export default function SnackbarComponent({message}) {
    const [open, setOpen] = React.useState(true);
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
  return (
      <Snackbar
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
          }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message={message}
          action={
              <React.Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                      <CloseIcon fontSize="small" />
                  </IconButton>
              </React.Fragment>
          }
      />)
}
