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
import { HEADER_TYPE } from '../../../utils/contansts';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SelectMenuComponent from "../../../components/Atoms/SelectMenu";
import InputSearch from 'components/Atoms/InputSearch';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#5f6368',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  buttonAccount: {
    backgroundColor: '#5f6368'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  hide: {
    display: 'none'
  },
  titleCreate: {
    // borderLeft: '1px solid #fff',
    borderRadius: 0,
    marginLeft: 20,
    paddingLeft: 20,
    padding: 5,
    fontSize: 18
  }
}));
const AccountButton = withStyles({
  root: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'none',
    // borderLeft: '1px solid #fff',
    borderRadius: 0,
    marginLeft: 18
  }
})(Button);

const ProfileButton = withStyles({
  root: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'none',
    borderRadius: 0,
    marginLeft: 18
  }
})(Button);

export default function HeaderComponent({ type, setOpen = null, open = null }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorAllCampaigns, setAnchorAllCampaigns] = React.useState(null);
  const [anchorNameCampaign, setAnchorNameCampaigns] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawerOpen = () => {
    if (setOpen) {
      setOpen(true);
    }
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

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const optionAccounts = [
    {
      name: 'Profile'
    },
    {
      name: 'My account'
    },
  ]
  const optionMerchants = [
    {
      name: 'Merchant name 1'
    },
    {
      name: 'Merchant name 2'
    },
  ]
  const optionCampaign = [
    {
      name: 'Campaign name 1'
    },
    {
      name: 'Campaign name 2'
    },
    {
      name: 'Campaign name 3'
    }
  ]

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
      {type !== HEADER_TYPE.CREATE_CAMPAIGN ? (
        <MenuItem onClick={handleAllCampaignsMenuOpen}>
          <p>Merchant name</p>
        </MenuItem>
      ) : null}
      {type === HEADER_TYPE.ALL_CAMPAIGNS ? (
        <MenuItem onClick={handleNameCampaignMenuOpen}>
          <p>Campaign name</p>
        </MenuItem>
      ) : null}

      {type !== HEADER_TYPE.CREATE_CAMPAIGN ? (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Account Name</p>
        </MenuItem>
      ) : null}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        {/*<AppBar position="static">*/}
        <Toolbar>
          {type !== HEADER_TYPE.CREATE_CAMPAIGN ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          {type === HEADER_TYPE.CREATE_CAMPAIGN ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <CloseIcon />
            </IconButton>
          ) : null}
          {!open ? (
            <Typography className={classes.title} variant="h3" noWrap>
              LOGO
            </Typography>
          ) : null}
          <div className={classes.sectionDesktop}>
            {type !== HEADER_TYPE.CREATE_CAMPAIGN ? (
              <SelectMenuComponent
                buttonText={'Merchant name 1'}
                options={optionMerchants}
                endIcon={<ArrowDropDownIcon fontSize="inherit" />}
              />
            ) : (
              <Typography variant={'h6'} className={classes.titleCreate}>
                Create a new campaign
              </Typography>
            )}

            {type === HEADER_TYPE.ONE_CAMPAIGN ? (
              <SelectMenuComponent
                buttonText={'Campaign name 3'}
                options={optionCampaign}
                endIcon={<ArrowDropDownIcon fontSize="inherit" />}
              />
            ) : null}
          </div>

          <div className={classes.grow} />
          {type !== HEADER_TYPE.CREATE_CAMPAIGN ? <InputSearch handleSearch={console.log('search')} /> : null}
          <div className={classes.sectionDesktop}>
            {type !== HEADER_TYPE.CREATE_CAMPAIGN ? (
              <SelectMenuComponent
                buttonText={'Account Name'}
                options={optionAccounts}
                endIcon={<AccountCircle fontSize="inherit" />}
              />
            ) : null}
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
    </div>
  );
}
