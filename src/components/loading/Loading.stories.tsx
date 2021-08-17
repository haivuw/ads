import React, { useState, useEffect } from 'react';
import LoadingComponent from './LoadingComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default {
  title: 'Components/Views/Loading',
  component: LoadingComponent,
  argTypes: {
    loading: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof LoadingComponent>;

const Template: ComponentStory<typeof LoadingComponent> = args => <LoadingComponent {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading: true
};
