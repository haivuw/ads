import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toolbar from './Toolbar';
import Button from 'components/Buttons';
import AddIcon from '@material-ui/icons/Add';
import { Box, InputAdornment } from '@material-ui/core';
import TextInput from 'components/form-inputs/TextInput';
import GetAppIcon from '@material-ui/icons/GetApp';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import SearchIcon from '@material-ui/icons/Search';
import Filter from './Filter';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';

export default {
  title: 'Components/Table/Toolbar',
  component: Toolbar,
  argTypes: {}
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = args => (
  <Toolbar {...args}>
    <Button style={{ minWidth: 'unset', padding: 6, color: 'white' }} color="primary">
      <AddIcon />
    </Button>
    <Box m={1} />
    <Filter />
    <Box ml="auto" display="flex" alignItems="center">
      <TextInput
        style={{ height: 36 }}
        placeholder="Search campaigns"
        startAdornment={<SearchIcon />}
      />
      <Box m={1} />
      <Button endIcon={<ViewColumnIcon />}>Columns</Button>
      <Box m={1} />
      <Button endIcon={<GetAppIcon />}>Download</Button>
      <Box m={1} />
      <Button endIcon={<AspectRatioIcon />}>Expand</Button>
    </Box>
  </Toolbar>
);

export const ToolbarWithChildren = Template.bind({});
ToolbarWithChildren.args = { height: 50 };
