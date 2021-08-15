import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TimeSeriesChart from './TimeSeries';
import addDays from 'date-fns/addDays';

export default {
  title: 'Charts/TimeSeries',
  component: TimeSeriesChart,
  argTypes: {}
} as ComponentMeta<typeof TimeSeriesChart>;

const Template: ComponentStory<typeof TimeSeriesChart> = args => <TimeSeriesChart {...args} />;

export const Base = Template.bind({});
Base.decorators = [
  Story => (
    <div style={{ height: 500, width: '100%' }}>
      <Story />
    </div>
  )
];

const generateData = (from: Date, to: Date) => {
  let data = [];
  let temp = from;
  while (temp < to) {
    data.push({ time: temp.getTime(), clicks: Math.floor(Math.random() * 100) });
    temp = addDays(temp, 1);
  }
  console.log(data);
  return data;
};

Base.args = {
  data: generateData(new Date(), addDays(new Date(), Math.floor(Math.random() * (30 - 7 + 1)) + 7))
};