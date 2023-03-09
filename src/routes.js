import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Cart from './components/Pages/Cart/Cart';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';

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
    title: 'Cart',
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
