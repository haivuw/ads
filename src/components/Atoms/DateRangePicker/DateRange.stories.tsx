import React, { FC, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { addDays } from 'date-fns';
import DateRangePicker from './index';
import { Range } from 'react-date-range';

export default {
  title: 'Components/Atoms/DateRangePicker',
  component: DateRangePicker,
  argTypes: {
    direction: {
      options: ['vertical', 'horizontal'],
      control: 'radio'
    }
  }
} as ComponentMeta<typeof DateRangePicker>;

export const Picker: ComponentStory<typeof DateRangePicker> = args => {
  const [range, setRange] = useState<Range>({
    startDate: new Date(),
    endDate: addDays(new Date(), 20)
  });
  return <DateRangePicker value={range} onChange={setRange} {...args} />;
};
Picker.args = {
  direction: 'vertical'
};
