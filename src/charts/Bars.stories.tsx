import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BarsChart from './Bars';
import addDays from 'date-fns/addDays';

export default {
  title: 'Charts/Bars',
  component: BarsChart,
  argTypes: {}
} as ComponentMeta<typeof BarsChart>;

const Template: ComponentStory<typeof BarsChart> = args => <BarsChart {...args} />;

export const Base = Template.bind({});
Base.decorators = [
  Story => (
    <div style={{ height: 500, width: '100%' }}>
      <Story />
    </div>
  )
];

const generateData = () => {
  const camp_num = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
  let data = [];
  let count = 0;
  while (count < camp_num) {
    data.push({ name: `campaign ${count}`, clicks: Math.floor(Math.random() * 100) });
    count++;
  }
  return data;
};

Base.args = {
  data: generateData()
};
