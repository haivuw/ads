import React from 'react';
import NavigationComponent from '.';

export default {
  title: 'Layouts/Navigation',
  component: NavigationComponent,
  argTypes: {
    open: {
      control: 'boolean'
    }
  }
};

const Template = args => <NavigationComponent {...args} />;
export const Navigation = Template.bind({});
const setOpen = () => { };
Navigation.args = {
  open: true,
  setOpen: setOpen
};
