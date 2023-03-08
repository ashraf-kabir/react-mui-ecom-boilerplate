import React from 'react';
import { Box, Typography } from '@mui/material';
import './Banner.css';

const Banner = () => {
  return (
    <Box
      className='banner__image'
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/react-mui-ecom-boilerplate/img/nike-3.jpg)',
      }}
    >
      <Box className='banner__text'>
        <Typography
          variant='h5'
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel aliquam
          et amet aliquid laudantium quis voluptates
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
