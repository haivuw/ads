import {
    withStyles,
} from '@material-ui/core';
import React, { FC } from 'react';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const AccountButton = withStyles({
    root: {
        fontSize: 16,
        color: '#fff',
        textTransform: 'none',
        borderRadius: 0,
        marginLeft: 18
    }
})(Button);

export default function SelectMenuComponent({ buttonText, options, endIcon , ...prop}) {
    console.log(11111111, prop)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleDrawerOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const menuId = 'menu_id' + Math.random();

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
            {...prop?.optionMenu}
        >
            {options.map(o => (
                <MenuItem onClick={handleMenuClose}>{o.name}</MenuItem>
            ))}
        </Menu>
    );

    return (
    <>
        <AccountButton
            variant={'text'}
            aria-controls={menuId}
            onClick={handleDrawerOpen}
            endIcon={endIcon}
            {...prop?.optionButton}
        >
            {buttonText}
        </AccountButton>
        {renderAllCampaignsMenu}
    </>
    );
}

