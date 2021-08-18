import React from 'react';
import BreadcrumbsComponent from './Breadcrumbs';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/Atoms/Breadcrumbs',
    component: BreadcrumbsComponent,
    argTypes: {
        breadcrumbs: {
            control: 'array'
        }
    }
} as ComponentMeta<typeof BreadcrumbsComponent>;

const Template: ComponentStory<typeof BreadcrumbsComponent> = args => (
    <BreadcrumbsComponent {...args} />
);

export const Breadcrumbs = Template.bind({});
const data = [
    {
        link: '/',
        name: 'Home',
    },
    {
        link: '',
        name: 'Campaigns',
    }
]
Breadcrumbs.args = {
    breadcrumbs: data,
};
