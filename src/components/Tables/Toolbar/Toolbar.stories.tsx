import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toolbar from './Toolbar';
import Button from '../../Atoms/Buttons';
import AddIcon from '@material-ui/icons/Add';
import { Box, InputAdornment } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import SearchIcon from '@material-ui/icons/Search';
import Filter from './Filter';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from '@material-ui/core/Tooltip';
import SnackbarComponent from "../../Atoms/Snackbar";
export default {
    title: 'Components/Table/Toolbar',
    component: Toolbar,
    argTypes: {}
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = args => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [message, setMessage] = React.useState('');
    const [key, setKey] = React.useState(Math.random);
    const isMenuOpen = Boolean(anchorEl);

    const handleDrawerOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = (message) => {
        setAnchorEl(null);
        if (message) {
            setMessage('Downloading ' + message + ' file')
        }
    };
    const menuId = 'download-type';

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
            <MenuItem onClick={() => handleMenuClose('Excel')}>Excel</MenuItem>
            <MenuItem onClick={() => handleMenuClose('.csv')}>.csv</MenuItem>
            <MenuItem onClick={() => handleMenuClose('.pdf')}>.pdf</MenuItem>
        </Menu>
    );
    return (<Toolbar {...args}>
        <Tooltip title="Create a new campaigns">
            <Button
                style={{ minWidth: 'unset', padding: 6, color: 'white' }}
                color="primary"
                onClick={() => setMessage('This is add new campaign function')}
            >
                <AddIcon />
            </Button>
        </Tooltip>
        <Box m={1} />
        <Filter />
        <Box ml="auto" display="flex" alignItems="center">
            <Button
                endIcon={<SearchIcon />}
                onClick={() => setMessage('This is search function')}
                size={'small'}
                variant={'text'}
                style={{ textTransform: 'none' }}
            >
                Search
            </Button>
            <Box m={1} />
            <Button
                endIcon={<ViewColumnIcon />}
                size={'small'}
                onClick={() => setMessage('This is columns function')}
                style={{ textTransform: 'none' }}
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
                style={{ textTransform: 'none' }}
                aria-controls={menuId}
            >
                Download
            </Button>
            {renderAllCampaignsMenu}
            <Box m={1} />
            <Button
                endIcon={<AspectRatioIcon />}
                onClick={() => setMessage('This is expand function')}
                size={'small'}
                style={{ textTransform: 'none' }}
                variant={'text'}
            >Expand</Button>
        </Box>
        {message ? <SnackbarComponent key={key} message={message} /> : null}
    </Toolbar>
    )
};

export const ToolbarWithChildren = Template.bind({});
ToolbarWithChildren.args = { height: 50 };
