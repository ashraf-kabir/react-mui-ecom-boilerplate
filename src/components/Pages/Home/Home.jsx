import React from 'react';
import { Container, Grid } from '@mui/material';
import HeroSection from '../../HeroSection/HeroSection';
import Banner from '../../Banner/Banner';
import ProductSection from '../../ProductSection/ProductSection';
import FilterSection from '../../FilterSection/FilterSection';

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
    name: 'Medicine',
  },
  {
    id: 7,
    name: 'Cosmetics',
  },
];

const products = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    price: 120,
    image: '/react-mui-ecom-boilerplate/img/nike-air-max-270.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 5,
  },
  {
    id: 2,
    name: 'Air Jordan 6 Retro',
    price: 140,
    image: '/react-mui-ecom-boilerplate/img/air-jordan-1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 5,
  },
  {
    id: 3,
    name: 'Galaxy Tab S6 Lite',
    price: 400,
    image: '/react-mui-ecom-boilerplate/img/samsung-galaxy-tab.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 3,
  },
  {
    id: 4,
    name: 'BenQ GW2280 22"',
    price: 100,
    image: '/react-mui-ecom-boilerplate/img/gw2283-500x500.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 3,
  },
  {
    id: 5,
    name: 'Head First Design Patterns',
    price: 50,
    image: '/react-mui-ecom-boilerplate/img/head-first-design-patterns.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 2,
  },
  {
    id: 6,
    name: 'Tang Orange Flavor',
    price: 10,
    image: '/react-mui-ecom-boilerplate/img/tang-orange.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 1,
  },
  {
    id: 7,
    name: 'Herbal Essences Shampoo',
    price: 20,
    image: '/react-mui-ecom-boilerplate/img/herbal-essences-shampoo.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 7,
  },
  {
    id: 8,
    name: 'Macbook Air 2020 13"',
    price: 1000,
    image: '/react-mui-ecom-boilerplate/img/macbook-air.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 3,
  },
];

const priceRange = {
  name: '$0 - $1000',
  min: 0,
  max: 1000,
};

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
          {/* <CategorySection categories={categories} /> */}
          <FilterSection categories={categories} priceRange={priceRange} />
          <ProductSection products={products} />
        </Grid>
      </Container>

      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <Banner />
      </Container>
    </Container>
  );
};

export default Home;
