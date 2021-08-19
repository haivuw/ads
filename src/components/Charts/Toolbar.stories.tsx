
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToolbarComponent from './Toolbar';

export default {
    title: 'Components/Charts/Toolbar',
    component: ToolbarComponent,
    argTypes: {}
} as ComponentMeta<typeof ToolbarComponent>;

const Template: ComponentStory<typeof ToolbarComponent> = args => {
    return (
        <ToolbarComponent {...args}>
        </ToolbarComponent>
    );
}

export const Toolbar = Template.bind({});
Toolbar.args = {
    height: 60,
    boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);'
};
