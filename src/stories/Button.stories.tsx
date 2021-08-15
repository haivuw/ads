import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Buttons';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['outlined', 'text', 'contained'],
      control: 'radio'
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'Text',
  disabled: false,
  variant: 'contained',
  style: {
    // backgroundColor: 'red'
  }
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  children: 'Processing'
};
