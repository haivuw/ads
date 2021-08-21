import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {BootstrapInput, useStylesPagination} from "./Pagination.style";


export default function PaginationComponent({ count, onChange, pageSize, setPageSize }) {
  const classes = useStylesPagination();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPageSize(Number(event.target.value));
  };

  const onChange1 = (event, value) => {
    // console.log(111111, value);
    onChange(value);
  };

  return (
    <div className={classes.container}>
        <div className={classes.pagination}>
          <Pagination style={{margin: 'auto'}} count={count} variant="outlined" shape="rounded" onChange={onChange1} />
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
    </div>
  );
}
