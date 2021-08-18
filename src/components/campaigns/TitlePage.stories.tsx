import React from 'react';
import TitleComponent from './Title';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/Atoms/TitlePage',
    component: TitleComponent,
    argTypes: {
        text: {
            control: 'text'
        },
        isPicker: {
            control: 'boolean'
        }
    }
} as ComponentMeta<typeof TitleComponent>;

const Template: ComponentStory<typeof TitleComponent> = args => (
    <TitleComponent {...args} />
);

export const TitlePage = Template.bind({});
TitlePage.args = {
    text: 'Campaigns',
    isPicker: false,
};
