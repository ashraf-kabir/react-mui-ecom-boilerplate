import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';

const ProductSection = ({ products }) => {
  return (
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
      {products.map((product) => (
        <Grid item lg={3} md={4} sm={6} my={3} px={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductSection;
