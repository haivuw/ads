import React from 'react';
import SelectInputComponent from './SelectInput';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default {
  title: 'Layouts/Header/SelectMenu',
  component: SelectInputComponent,
  argTypes: {
    buttonText: {
      control: 'text'
    },
    options: {
      control: 'array'
    },
    endIcon: {

    }
  }
}as ComponentMeta<typeof SelectInputComponent>;

const Template: ComponentStory<typeof SelectInputComponent> = args => <SelectInputComponent {...args} />;
export const SelectMenu = Template.bind({});

const optionCampaign = [
  {
    name: 'Campaign Name 1'
  },
  {
    name: 'Campaign Name 2'
  },
  {
    name: 'Campaign Name 3'
  }
]
const endIcon = <ArrowDropDownIcon fontSize="inherit"/>;
const style =  {
     color: '#000'
  }
SelectMenu.args = {
  buttonText: 'Campaign name',
  options: optionCampaign,
  endIcon: endIcon,
  optionButton: {style},
};