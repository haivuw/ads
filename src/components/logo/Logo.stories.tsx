import React from 'react';
import LogoComponent from './Logo';

export default {
  title: 'Layouts/Logo',
  component: LogoComponent,
  argTypes: {
    color: {
      control: 'radio',
      options: ['#000', '#fff'],
    }
  }
};

const Template = args => <LogoComponent {...args} />;
export const Logo = Template.bind({});
Logo.args = {

};
