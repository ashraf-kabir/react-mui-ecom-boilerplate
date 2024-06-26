import * as React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ScrollToColor from './ScrollToColor';
import { useGlobalContext } from '../../contexts/GlobalContext';
import LoginModal from '../LoginModal/LoginModal';
import routes from '../../routes';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const { setLoginModal } = useGlobalContext();
  // const [routes, setRoutes] = React.useState([]);
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleNavigation = (e) => {
  //   e.preventDefault();
  // };

  const handleLoginModal = () => {
    setLoginModal(true);
    handleCloseNavMenu();
  };

  return (
    <ScrollToColor>
      <AppBar
        position='fixed'
        style={{ background: 'none', boxShadow: 'none' }}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {/* add logo or icon */}
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/react-mui-ecom-boilerplate/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            {/* hamburger menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {routes
                  .filter((route) => route.path !== '*')
                  .map((route) => (
                    <MenuItem key={route.title} onClick={handleCloseNavMenu}>
                      <Link
                        to={route.path}
                        style={{
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >
                        {route.title}
                      </Link>
                    </MenuItem>
                  ))}

                <MenuItem onClick={handleLoginModal}>
                  <Link
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    Sign In
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            {/* mobile menu logo text */}
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='/react-mui-ecom-boilerplate/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            {/* desktop nav menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
              }}
            >
              {routes
                .filter((route) => route.path !== '*')
                .map((route) => (
                  <Button
                    key={route.title}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      textAlign: 'center',
                    }}
                  >
                    <Link
                      to={route.path}
                      style={{
                        color:
                          location.pathname === '/react-mui-ecom-boilerplate/'
                            ? 'white'
                            : 'black',
                        textDecoration: 'none',
                      }}
                    >
                      {route.title}
                    </Link>
                  </Button>
                ))}
              <Button
                variant='contained'
                sx={{ my: 2, color: 'white', display: 'block' }}
                color='secondary'
                onClick={handleLoginModal}
              >
                Sign In
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0, ml: 2 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        <LoginModal />
      </AppBar>
    </ScrollToColor>
  );
}
export default Navbar;
