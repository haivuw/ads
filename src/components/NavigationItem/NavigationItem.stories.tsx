
import React from 'react';
import NavigationItem from './NavigationItem';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default {
  title: 'Layouts/Navigation/Item',
  component: NavigationItem,
  argTypes: {
    icon: {
    },
    textButton: {

    }
  }
};

const Template = args => <NavigationItem {...args} />;
export const Item = Template.bind({});
Item.args = {
  icon: <DashboardIcon />,
  textButton: 'Dashboard'
};
