import React from 'react';
import SelectInputComponent from './SelectInput';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default {
  title: 'Components/Atoms/SelectMenu',
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
    name: 'Campaign name 1'
  },
  {
    name: 'Campaign name 2'
  },
  {
    name: 'Campaign name 3'
  }
]
const endIcon = <ArrowDropDownIcon fontSize="inherit"/>;
const style =  {
     color: '#000'
  }
SelectMenu.args = {
  buttonText: 'Campaign name 2',
  options: optionCampaign,
  endIcon: endIcon,
  optionButton: {style},
};