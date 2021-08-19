import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BarsChart, {generateData} from './Bars';
import addDays from 'date-fns/addDays';

export default {
  title: 'Components/Charts/Bars',
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

Base.args = {
  data: generateData()
};
