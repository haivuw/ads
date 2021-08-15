import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TimeSeriesChart, { generateData } from './TimeSeries';

export default {
  title: 'Charts/TimeSeries',
  component: TimeSeriesChart,
  argTypes: {}
} as ComponentMeta<typeof TimeSeriesChart>;

const Template: ComponentStory<typeof TimeSeriesChart> = args => <TimeSeriesChart {...args} />;

export const Base = Template.bind({});
Base.decorators = [
  Story => (
    <div style={{ height: 200, width: '100%' }}>
      <Story />
    </div>
  )
];

Base.args = {
  data: generateData()
};
