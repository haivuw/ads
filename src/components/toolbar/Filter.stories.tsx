import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Filter from './Filter';

export default {
  title: 'Components/Table/Filter',
  component: Filter,
  argTypes: {}
} as ComponentMeta<typeof Filter>;

export const Default: ComponentStory<typeof Filter> = args => <Filter />;
