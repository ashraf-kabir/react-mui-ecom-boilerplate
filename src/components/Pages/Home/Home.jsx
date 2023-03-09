import React from 'react';
import { Container, Grid } from '@mui/material';
import HeroSection from '../../HeroSection/HeroSection';
import ProductCard from '../../ProductCard/ProductCard';
import Banner from '../../Banner/Banner';
import CategorySection from '../../CategorySection/CategorySection';

const categories = [
  {
    id: 1,
    name: 'Food',
  },
  {
    id: 2,
    name: 'Books',
  },
  {
    id: 3,
    name: 'Electronics',
  },
  {
    id: 4,
    name: 'Clothes',
  },
  {
    id: 5,
    name: 'Shoes',
  },
  {
    id: 6,
    name: 'Accessories',
  },
];

const Home = () => {
  return (
    <Container
      component='main'
      style={{ margin: 0, padding: 0 }}
      maxWidth={false}
    >
      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <HeroSection />
      </Container>

      <Container maxWidth='xl'>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: '3rem 0rem 2rem 0rem',
          }}
        >
          <CategorySection categories={categories} />
          <Grid
            item
            xs={12}
            sm={9}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <Grid item lg={3} md={4} sm={6} my={3} px={3}>
              <ProductCard />
            </Grid>
            <Grid item lg={3} md={4} sm={6} my={3} px={3}>
              <ProductCard />
            </Grid>
            <Grid item lg={3} md={4} sm={6} my={3} px={3}>
              <ProductCard />
            </Grid>
            <Grid item lg={3} md={4} sm={6} my={3} px={3}>
              <ProductCard />
            </Grid>
            <Grid item lg={3} md={4} sm={6} my={3} px={3}>
              <ProductCard />
            </Grid>
            <Grid item lg={3} md={4} sm={6} my={3} px={3}>
              <ProductCard />
            </Grid>
            <Grid item lg={3} md={4} sm={6} my={3} px={3}>
              <ProductCard />
            </Grid>
            <Grid item lg={3} md={4} sm={6} my={3} px={3}>
              <ProductCard />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <Banner />
      </Container>
    </Container>
  );
};

export default Home;
