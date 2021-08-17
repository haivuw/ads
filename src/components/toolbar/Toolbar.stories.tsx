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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from '@material-ui/core/Tooltip';
export default {
  title: 'Components/Table/Toolbar',
  component: Toolbar,
  argTypes: {}
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = args => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleDrawerOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
    setAnchorEl(null);
    };
    const menuId = 'download-type';

    const renderAllCampaignsMenu = (
    <Menu
        id={menuId}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
        keepMounted
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose}>Excel</MenuItem>
        <MenuItem onClick={handleMenuClose}>.csv</MenuItem>
        <MenuItem onClick={handleMenuClose}>.pdf</MenuItem>
    </Menu>
    );
  return (<Toolbar {...args}>
  <Tooltip title="Create a new campaigns">
    <Button style={{ minWidth: 'unset', padding: 6, color: 'white' }} color="primary">
      <AddIcon />
    </Button>
  </Tooltip>
    <Box m={1} />
    <Filter />
    <Box ml="auto" display="flex" alignItems="center">
        <Button
            endIcon={<SearchIcon />}
            size={'small'}
            variant={'text'}
        >
            Search
        </Button>
      <Box m={1} />
      <Button
          endIcon={<ViewColumnIcon />}
          size={'small'}
          variant={'text'}
      >
          Columns
      </Button>
      <Box m={1} />
        <Button
            endIcon={<GetAppIcon />}
            onClick={handleDrawerOpen}
            aria-haspopup="true"
            size={'small'}
            variant={'text'}
            aria-controls={menuId}
        >
            Download
        </Button>
    {renderAllCampaignsMenu}
      <Box m={1} />
      <Button
          endIcon={<AspectRatioIcon />}
          size={'small'}
          variant={'text'}
      >Expand</Button>
    </Box>
  </Toolbar>
)};

export const ToolbarWithChildren = Template.bind({});
ToolbarWithChildren.args = { height: 50 };
