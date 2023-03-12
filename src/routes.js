import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Cart from 'pages/Cart/Cart';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import { Badge } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const routes = [
  {
    path: '/react-mui-ecom-boilerplate/',
    component: Home,
    title: 'Home',
    exact: true,
  },
  {
    path: '/react-mui-ecom-boilerplate/about',
    component: About,
    title: 'About',
    exact: true,
  },
  {
    path: '/react-mui-ecom-boilerplate/cart',
    component: Cart,
    title: (
      <Badge
        badgeContent={3}
        color='heartColor'
        sx={{
          '& .MuiBadge-badge': {
            color: 'white',
            backgroundColor: 'heartColor.main',
            fontSize: '0.6rem',
            fontWeight: 'bold',
            padding: '0 4px',
            minWidth: '16px',
            height: '16px',
            borderRadius: '8px',
            lineHeight: '16px',
            top: 'calc(100% - 18px)',
            right: '-4px',
          },
        }}
      >
        <FontAwesomeIcon icon={faCartPlus} size='lg' />
      </Badge>
    ),
    exact: true,
  },
  {
    path: '*',
    component: PageNotFound,
    title: 'Page Not Found',
    exact: true,
  },
];

export default routes;
