import React from 'react';
import { useLocation } from 'react-router-dom'
import { useScrollTrigger } from '@mui/material';

const ScrollHandler = (props) => {
  const location = useLocation();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
      color: location.pathname === '/react-mui-ecom-boilerplate' ? 'white' : 'black',
      transition: trigger ? '0.3s' : '0.5s',
      boxShadow: 'none',
      // padding: '10px 0px',
    },
  });
};

const ScrollToColor = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;
