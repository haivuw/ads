import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  })
);

export default function Logo() {

  return (
        <Typography variant="h3" noWrap>
            LOGO
        </Typography>
  );
}
