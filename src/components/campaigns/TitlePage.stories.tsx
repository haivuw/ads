import React from 'react';
import TitleComponent from './Title';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/TitlePage',
    component: TitleComponent,
    argTypes: {
        text: {
            control: 'text'
        }
    }
} as ComponentMeta<typeof TitleComponent>;

const Template: ComponentStory<typeof TitleComponent> = args => (
    <TitleComponent {...args} />
);

export const TitlePage = Template.bind({});
TitlePage.args = {
    text: 'Campaigns',
};
