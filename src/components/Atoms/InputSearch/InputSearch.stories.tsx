import React from 'react';
import InputSearch from '.';
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: 'Components/Atoms/InputSearch',
  component: InputSearch,
  argTypes: {
    handleSearch: {

    },
  }
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = args => <InputSearch {...args} />;
export const Search = Template.bind({});

Search.args = {
  handleSearch: function () {

  },
};