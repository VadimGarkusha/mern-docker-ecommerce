import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Chip } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CartIcon from '@material-ui/icons/ShoppingCart'
import { useDispatch, useSelector } from 'react-redux';
import {userLogout} from '../actions';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 300,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  emailChip: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main
  }
}));


export default () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const {isLoggedIn, email} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const renderAnonymousMenu = () => (
    <div>
      <MenuItem
        component={React.forwardRef((props, ref) => <Link to='signin' {...props} />)}
        onClick={handleMenuClose}>
        Login
      </MenuItem>
      <MenuItem
        component={React.forwardRef((props, ref) => <Link to='signup' {...props} />)}
        onClick={handleMenuClose}>
        Create Account
      </MenuItem>
    </div>
  )

  const renderAuthenticatedMenu = () => (
    <MenuItem
      component={React.forwardRef((props, ref) => <Link to='/' {...props} />)}
      onClick={() => {dispatch(userLogout())}}>
      Logout
      </MenuItem>
  )

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            E-commerce
          </Typography>
          <div className={classes.grow} />
          { isLoggedIn ? 
            <Chip label={email} className={classes.emailChip}/> 
            : null
          }
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton color='inherit'>
              <Badge badgeContent={0} color='secondary'>
                <CartIcon fontSize='large' />
              </Badge>
            </IconButton>
            <IconButton
              edge='end'
              aria-owns='material-appbar'
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle fontSize='large' />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
{
  isLoggedIn ? renderAuthenticatedMenu() : renderAnonymousMenu()
}
      </Menu>
    </div>
  );
}
