import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from 'components/Atoms/FormInputs/TextInput';

export default {
  title: 'Components/Atoms/TextInput',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const Base = Template.bind({});
Base.args = {
  placeholder: 'input...'
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'enter password...',
  type: 'password'
};
