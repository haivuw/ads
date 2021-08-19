import React from 'react';
import SnackbarComponent from '.';

export default {
  title: 'Components/Atoms/Snackbar',
  component: SnackbarComponent,
  argTypes: {
    message: {
      control: 'text',
    },
    // open: {
    //   control: 'boolean'
    // },
    // setOpen: {
    // },
  }
};

const Template = args => <SnackbarComponent {...args} />;
export const Snackbar = Template.bind({});
const setOpen = () => {

}
Snackbar.args = {
  message: 'This is message',
};
