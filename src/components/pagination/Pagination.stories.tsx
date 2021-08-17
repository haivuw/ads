import React from 'react';
import PaginationComponent from './Pagination';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Views/Pagination',
  component: PaginationComponent,
  argTypes: {
    count: {
      control: 'number'
    },
    pageSize: {
      options: [10, 20, 30, 50, 100],
      control: 'radio'
    }
  }
} as ComponentMeta<typeof PaginationComponent>;

const Template: ComponentStory<typeof PaginationComponent> = args => (
  <PaginationComponent {...args} />
);

export const Pagination = Template.bind({});
const onChange = () => {};
const setPageSize = () => {};
Pagination.args = {
  count: 1000,
  pageSize: 10,
  onChange: onChange,
  setPageSize: setPageSize
};
