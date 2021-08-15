import { Button, ButtonProps } from '@material-ui/core';
import { FC } from 'react';

export const DateButton: FC<{ start: Date; end: Date } & ButtonProps> = props => {
  const { start, end } = props;
  return (
    <Button>{start ? `${start.toDateString()} ~ ${end.toDateString()}` : 'Select range'}</Button>
  );
};
