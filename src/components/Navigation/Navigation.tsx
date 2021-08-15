import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AdbIcon from '@material-ui/icons/Adb';
import BusinessIcon from '@material-ui/icons/Business';
import HeaderComponent from "../header-demo/HeaderComponent";
import {HEADER_TYPE} from "../../config/contanst";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
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
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

export default function Navigation() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/*<AppBar*/}
            {/*    position="fixed"*/}
            {/*    className={clsx(classes.appBar, {*/}
            {/*        [classes.appBarShift]: open,*/}
            {/*    })}*/}
            {/*>*/}
            {/*    <HeaderComponent type={HEADER_TYPE.ALL_CAMPAIGNS}/>*/}
            {/*    <Toolbar>*/}
            {/*        <IconButton*/}
            {/*            color="inherit"*/}
            {/*            aria-label="open drawer"*/}
            {/*            onClick={handleDrawerOpen}*/}
            {/*            edge="start"*/}
            {/*            className={clsx(classes.menuButton, {*/}
            {/*                [classes.hide]: open,*/}
            {/*            })}*/}
            {/*        >*/}
            {/*            <MenuIcon />*/}
            {/*        </IconButton>*/}
            {/*        <Typography variant="h6" noWrap>*/}
            {/*           LOGO*/}
            {/*        </Typography>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}
            <HeaderComponent type={HEADER_TYPE.ALL_CAMPAIGNS} open={open} setOpen={setOpen}/>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <Typography variant="h3" noWrap>
                        LOGO
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary={'概要'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><PeopleOutlineIcon /></ListItemIcon>
                        <ListItemText primary={'アカウント'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><AdbIcon /></ListItemIcon>
                        <ListItemText primary={'キャンペーン'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><BusinessIcon /></ListItemIcon>
                        <ListItemText primary={'商品'} />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div>
    );
}
