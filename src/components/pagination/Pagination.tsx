import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme, withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pagination: {
      display: 'flex'
    }
  })
);

export default function PaginationComponent({ count, onChange, pageSize, setPageSize }) {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPageSize(Number(event.target.value));
  };

  const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
      root: {
        'label + &': {
          marginTop: theme.spacing(3)
        }
      },
      input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '5px 26px 5px 12px',
        marginLeft: 20,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          borderRadius: 4,
          borderColor: '#80bdff',
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
        }
      }
    })
  )(InputBase);

  const onChange1 = (event, value) => {
    console.log(111111, value);
    onChange(value);
  };

  return (
    <div className={classes.pagination}>
      <Pagination count={count} variant="outlined" shape="rounded" onChange={onChange1} />
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={pageSize}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
    </div>
  );
}
