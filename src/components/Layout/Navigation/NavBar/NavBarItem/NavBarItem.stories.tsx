
import React from 'react';
import NavBarItem from './NavBarItem';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default {
  title: 'Layouts/Navigation/Item',
  component: NavBarItem,
  argTypes: {
    icon: {
    },
    textButton: {

    }
  }
};

const Template = args => <NavBarItem {...args} />;
export const Item = Template.bind({});
Item.args = {
  icon: <DashboardIcon />,
  textButton: 'Dashboard'
};
