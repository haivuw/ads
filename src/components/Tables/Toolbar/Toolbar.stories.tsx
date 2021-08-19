import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toolbar from './Toolbar';
export default {
    title: 'Components/Table/Toolbar',
    component: Toolbar,
    argTypes: {}
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = args => {
    return (<Toolbar {...args}></Toolbar>)
};

export const ToolbarWithChildren = Template.bind({});
ToolbarWithChildren.args = { height: 50 };
