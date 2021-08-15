import React from 'react';
import { alpha, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import {HEADER_TYPE} from "../../config/contanst";
import Button from '@material-ui/core/Button';
import InputSearch from "./InputSearch";
import clsx from "clsx";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    buttonAccount: {
        backgroundColor: '#3f51b5',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    hide: {
        display: 'none',
    },
    titleCreate: {
        borderLeft: '1px solid #fff',
        borderRadius: 0,
        marginLeft: 20,
        paddingLeft: 20,
        padding: 5,
        fontSize: 18,
    }
}));
const AccountButton = withStyles({
    root: {
        fontSize: 20,
        color: '#fff',
        textTransform: 'none',
        borderLeft: '1px solid #fff',
        borderRadius: 0,
        marginLeft: 18
    },
})(Button);

const ProfileButton = withStyles({
    root: {
        fontSize: 20,
        color: '#fff',
        textTransform: 'none',
        borderRadius: 0,
        marginLeft: 18
    },
})(Button);


export default function HeaderComponent({type, setOpen, open}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorAllCampaigns, setAnchorAllCampaigns] = React.useState(null);
    const [anchorNameCampaign, setAnchorNameCampaigns] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isAllCampaignsMenuOpen = Boolean(anchorAllCampaigns);
    const isNameCampaignsMenuOpen = Boolean(anchorNameCampaign);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    // const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAllCampaignsMenuOpen = (event: any) => {
        setAnchorAllCampaigns(event.currentTarget);
    };

    const handleNameCampaignMenuOpen = (event: any) => {
        setAnchorNameCampaigns(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleNameCampaignMenuClose = () => {
        setAnchorNameCampaigns(null);
        handleMobileMenuClose();
    };
    const handleAllCampaignsMenuClose = () => {
        setAnchorAllCampaigns(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const allCampaignsId = 'all-campaigns-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    const renderAllCampaignsMenu = (
        <Menu
            anchorEl={anchorAllCampaigns}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            id={allCampaignsId}
            keepMounted
            open={isAllCampaignsMenuOpen}
            onClose={handleAllCampaignsMenuClose}
        >
            <MenuItem onClick={handleAllCampaignsMenuClose}>アカウント一覧1</MenuItem>
            <MenuItem onClick={handleAllCampaignsMenuClose}>アカウント一覧2</MenuItem>
        </Menu>
    );

    const renderNameCampaignsMenu = (
        <Menu
            anchorEl={anchorNameCampaign}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            id={allCampaignsId}
            keepMounted
            open={isNameCampaignsMenuOpen}
            onClose={handleNameCampaignMenuClose}
        >
            <MenuItem onClick={handleNameCampaignMenuClose}>キャンペーン名1</MenuItem>
            <MenuItem onClick={handleNameCampaignMenuClose}>キャンペーン名2</MenuItem>
            <MenuItem onClick={handleNameCampaignMenuClose}>キャンペーン名3</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {type !== HEADER_TYPE.CREATE_CAMPAIGN ?
                <MenuItem onClick={handleAllCampaignsMenuOpen}>
                <p>新しいキャンペーンを作成</p>
            </MenuItem>
                : null }
            {type === HEADER_TYPE.ALL_CAMPAIGNS ?
                <MenuItem onClick={handleNameCampaignMenuOpen}>
                    <p>キャンペーン名</p>
                </MenuItem>
                : null }

            {type !== HEADER_TYPE.CREATE_CAMPAIGN ? <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>アカウント名</p>
            </MenuItem> : null }
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
            {/*<AppBar position="static">*/}
                <Toolbar>
                    {type !== HEADER_TYPE.CREATE_CAMPAIGN ?  <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton> : null }
                    {type === HEADER_TYPE.CREATE_CAMPAIGN ? <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <CloseIcon />
                    </IconButton> : null }
                    {!open ? <Typography className={classes.title} variant="h3" noWrap>
                        LOGO
                    </Typography> : null }
                    <div className={classes.sectionDesktop}>
                        {type !== HEADER_TYPE.CREATE_CAMPAIGN ? <AccountButton
                            variant={'text'}
                            onClick={handleAllCampaignsMenuOpen}
                            // endIcon={<ArrowDownwardIcon fontSize="inherit" />}
                        >
                            アカウント一覧
                        </AccountButton> :
                            <Typography variant={'h6'} className={classes.titleCreate}>
                            新しいキャンペーンを作成
                        </Typography> }

                        {type === HEADER_TYPE.ALL_CAMPAIGNS ? <AccountButton
                                variant={'text'}
                                onClick={handleNameCampaignMenuOpen}
                                // endIcon={<ArrowDownwardIcon fontSize="inherit" />}
                            >
                            キャンペーン名
                            </AccountButton> : null }
                    </div>

                    <div className={classes.grow} />
                    {type !== HEADER_TYPE.CREATE_CAMPAIGN ?
                        <InputSearch /> : null}
                    <div className={classes.sectionDesktop}>
                        {type !== HEADER_TYPE.CREATE_CAMPAIGN ?<ProfileButton
                            variant={'text'}
                            onClick={handleProfileMenuOpen}
                            endIcon={<AccountCircle fontSize="inherit" />}
                        >
                            アカウント名
                        </ProfileButton> : null}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            {renderAllCampaignsMenu}
            {renderNameCampaignsMenu}
        </div>
    );
}
