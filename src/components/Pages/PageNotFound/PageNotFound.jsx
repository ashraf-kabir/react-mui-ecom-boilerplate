import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const PageNotFound = () => {
  return (
    <Container component='main'>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        paddingTop={24}
      >
        <Typography variant='h1' component='h1'>
          404
        </Typography>
        <Typography variant='h2' component='h2'>
          Page Not Found
        </Typography>
      </Grid>
    </Container>
  );
};

export default PageNotFound;
