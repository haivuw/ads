import React, {useEffect} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToolbarComponent from './Toolbar';
import Button from 'components/Buttons';
import { Box, InputAdornment } from '@material-ui/core';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SnackbarComponent from "../components/Snackbar/Snackbar";

export default {
  title: 'Components/Charts/Toolbar',
  component: ToolbarComponent,
  argTypes: {}
} as ComponentMeta<typeof ToolbarComponent>;

const Template: ComponentStory<typeof ToolbarComponent> = args => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const [message, setMessage] = React.useState('');
    const [key, setKey] = React.useState(Math.random);

    const handleDrawerOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const menuId = 'type-chart';
    useEffect(() => {
        setKey(Math.random)
    }, [message])

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
            <MenuItem onClick={handleMenuClose}>Time series chart</MenuItem>
            <MenuItem onClick={handleMenuClose}>Stacked time series chart</MenuItem>
            <MenuItem onClick={handleMenuClose}>Summary chart</MenuItem>
        </Menu>
    );

    return (
        <ToolbarComponent {...args}>
            <Box m={1} />
            <Box ml="auto" display="flex" alignItems="center">
                <Button
                    startIcon={<div style={{backgroundColor: '#3b78e7', color: '#3b78e7', height: 12, width: 12}} />}
                    aria-haspopup="true"
                    size={'small'}
                    variant={'text'}
                    style={{textTransform: 'none'}}
                    aria-controls={menuId}
                >
                    Clicks
                </Button>
                <Box m={1} />
                <Button
                    startIcon={<div style={{backgroundColor: '#d23f31', color: '#d23f31', height: 12, width: 12}} />}
                    aria-haspopup="true"
                    size={'small'}
                    variant={'text'}
                    style={{textTransform: 'none'}}
                    aria-controls={menuId}
                >
                    Cost
                </Button>
                {renderAllCampaignsMenu}

                <Button
                    endIcon={<ViewColumnIcon />}
                    onClick={handleDrawerOpen}
                    aria-haspopup="true"
                    size={'small'}
                    variant={'text'}
                    style={{textTransform: 'none'}}
                    aria-controls={menuId}
                >
                    Chart type
                </Button>
                {renderAllCampaignsMenu}
                <Box m={1} />
                <Button
                    endIcon={<AspectRatioIcon />}
                    size={'small'}
                    style={{textTransform: 'none'}}
                    onClick={() => setMessage('This is expand function')}
                    variant={'text'}
                >
                    Expand
                </Button>
                {message ? <SnackbarComponent key={key} message={message}/> : null }
            </Box>
        </ToolbarComponent>
    );
}

export const Toolbar = Template.bind({});
Toolbar.args = {
    height: 60,
    boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);'
};
