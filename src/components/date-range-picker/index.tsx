import { FC, useState } from 'react';
import { DateRangePicker, DateRangePickerProps, Range } from 'react-date-range';
import { addDays } from 'date-fns';
import { Button, Popover } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Picker: FC<
  Omit<DateRangePickerProps, 'onChange'> & { value: Range; onChange: (range: Range) => void }
> = props => {
  const { value, onChange, ...rest } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)} variant="text" endIcon={<ArrowDropDownIcon />}>
        {value
          ? `${value.startDate.toDateString()} ~ ${value.endDate.toDateString()}`
          : 'Select range'}
      </Button>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <DateRangePicker
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={[{ ...value, key: 'selection' }]}
          onChange={item => onChange(item.selection)}
          {...rest}
        />
      </Popover>
    </>
  );
};

Picker.defaultProps = {
  value: {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  },
  onChange: () => null
};

export default Picker;
