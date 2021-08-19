import React from 'react';
import HeaderComponent from '.';
import { HEADER_TYPE } from '../../../config/contanst';
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: 'Layouts/Header',
  component: HeaderComponent,
  argTypes: {
    type: {
      options: [HEADER_TYPE.ALL_CAMPAIGNS, HEADER_TYPE.ONE_CAMPAIGN, HEADER_TYPE.CREATE_CAMPAIGN],
      control: 'radio'
    },
    open: {
      control: 'boolean'
    },
    setOpen: {

    }
  }
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = args => <HeaderComponent {...args} />;
export const Header = Template.bind({});

Header.args = {
  type: HEADER_TYPE.ALL_CAMPAIGNS,
  open: false,
};