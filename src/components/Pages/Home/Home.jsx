import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import HeroSection from '../../HeroSection/HeroSection';

const Home = () => {
  return (
    <Container
      component='main'
      style={{ margin: 0, padding: 0 }}
      maxWidth={false}
    >
      {/* add a hero image */}
      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <HeroSection />
      </Container>

      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='text.primary'
          gutterBottom
        >
          Home
        </Typography>
        <Typography
          variant='h5'
          align='center'
          color='text.secondary'
          paragraph
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          consequuntur quidem voluptatum quas quos. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          consequuntur quidem voluptatum quas quos. Quisquam, quae.
        </Typography>
      </Container>
    </Container>
  );
};

export default Home;
