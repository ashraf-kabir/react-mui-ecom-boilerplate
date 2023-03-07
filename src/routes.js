import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';

const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home',
    exact: true,
  },
  {
    path: '/about',
    component: About,
    title: 'About',
    exact: true,
  },
];

export default routes;
