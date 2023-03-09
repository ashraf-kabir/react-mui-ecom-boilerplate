import React from 'react';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';

const ProductSection = ({ products }) => {
  return (
    <Grid item xs={12} sm={9}>
      <Grid item xs={12} pl={2}>
        <Typography
          variant='h4'
          gutterBottom
          sx={{
            fontWeight: 'bold',
          }}
        >
          Products
        </Typography>
        {/* <Typography
          variant='body1'
          gutterBottom
          sx={{
            color: '#b3b3b3',
          }}
        >
          Search results for 'shoes'
        </Typography> */}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => (
          <Grid item lg={3} md={4} sm={6} my={3} px={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductSection;
