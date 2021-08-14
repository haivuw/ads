import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Buttons';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'ButtonText',
  style: {
    // backgroundColor: 'red'
  }
};
