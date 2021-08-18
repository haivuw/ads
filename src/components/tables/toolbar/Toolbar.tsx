import { Box, BoxProps } from '@material-ui/core';
import { FC } from 'react';

const Toolbar: FC<BoxProps> = props => {
  return <Box display="flex" alignItems="center" {...props} />;
};

export default Toolbar;
