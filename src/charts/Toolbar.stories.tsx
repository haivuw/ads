import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToolbarComponent from './Toolbar';
import Button from 'components/Buttons';
import { Box, InputAdornment } from '@material-ui/core';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import { Picker } from 'stories/DateRange.stories';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Breadcrumbs} from "../components/breadcrumbs/Breadcrumbs.stories";
import Typography from "@material-ui/core/Typography";

export default {
  title: 'Charts/Toolbar',
  component: ToolbarComponent,
  argTypes: {}
} as ComponentMeta<typeof ToolbarComponent>;

const Template: ComponentStory<typeof ToolbarComponent> = args => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleDrawerOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const menuId = 'type-chart';

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
            <MenuItem onClick={handleMenuClose}>時系列グラフ</MenuItem>
            <MenuItem onClick={handleMenuClose}>スタックされた時系列グラフ</MenuItem>
            <MenuItem onClick={handleMenuClose}>概要グラフ</MenuItem>
        </Menu>
    );

    return (
        <ToolbarComponent {...args}>
            <Box m={1} />
            <Box ml="auto" display="flex" alignItems="center">
                <Box m={1} />
                <Button
                    endIcon={<ViewColumnIcon />}
                    onClick={handleDrawerOpen}
                    aria-haspopup="true"
                    size={'small'}
                    variant={'text'}
                    aria-controls={menuId}
                >
                    Chart type
                </Button>
                {renderAllCampaignsMenu}
                <Box m={1} />
                <Button
                    endIcon={<AspectRatioIcon />}
                    size={'small'}
                    variant={'text'}
                >
                    Expand
                </Button>
            </Box>
        </ToolbarComponent>
    );
}

export const Toolbar = Template.bind({});
Toolbar.args = {
    height: 60,
    boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);'
};
