// @ts-nocheck
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Picker } from 'components/views/DateRange.stories';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      padding: 10,
      boxShadow:
        '0 2px 0px 0 rgb(0 0 0 / 14%), 0 0px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)'
    }
  })
);

export default function TitleComponent({ text, isPicker = true }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5" noWrap>
        {text}
      </Typography>
      <Box m={1} />
      <Box ml="auto" display="flex" alignItems="center">
        <Box m={1} />
        {isPicker ? <Picker /> : null }
      </Box>
    </div>
  );
}
