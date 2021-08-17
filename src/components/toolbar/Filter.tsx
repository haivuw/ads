import { FC, useRef, useState } from 'react';
import { Box, Button, Paper, Popover } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import SearchIcon from '@material-ui/icons/Search';
import TextInput from 'components/form-inputs/TextInput';

const Filter: FC<any> = props => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef();

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={() => setOpen(!open)}
        variant="text"
        endIcon={<ArrowDropDownIcon />}
        style={{textTransform: 'none'}}
      >
        Filter
      </Button>
      <Popover
        anchorEl={anchorRef.current}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <Box minHeight={100} minWidth={200} p="1em">
          <TextInput
            fullWidth
            style={{ height: 36 }}
            placeholder="Search filters"
            startAdornment={<SearchIcon />}
          />
          <Box width="100%" height={50} display="flex" textAlign="center">
            No filter available
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default Filter;
