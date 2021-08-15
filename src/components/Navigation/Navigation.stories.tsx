import React from 'react';
import NavigationComponent from './Navigation';
import { HEADER_TYPE } from '../../config/contanst';

export default {
  title: 'Components/Navigation',
  component: NavigationComponent,
  argTypes: {
    open: {
      control: 'boolean'
    }
  }
};

const Template = args => <NavigationComponent {...args} />;
export const Navigation = Template.bind({});
const setOpen = () => {};
Navigation.args = {
  open: true,
  setOpen: setOpen
};
