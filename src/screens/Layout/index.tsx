import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderComponent from './Headers';
import { HEADER_TYPE } from '../../config/contanst';
import Navigation from './Navigation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      // padding: theme.spacing(1)
    }
  })
);

export default function Layout(prop) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Navigation open={open} setOpen={setOpen} />
      </div>
      <HeaderComponent type={HEADER_TYPE.ALL_CAMPAIGNS} open={open} setOpen={setOpen} />
      <main className={classes.content} style={{ marginLeft: open ? 239 : 73 }}>
        <div className={classes.toolbar} />
        {prop?.children}
      </main>
    </>
  );
}
