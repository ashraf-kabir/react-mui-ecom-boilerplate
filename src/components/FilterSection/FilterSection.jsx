import React from 'react';
import { Grid } from '@mui/material';
import CategorySection from '../CategorySection/CategorySection';
import PriceRangeSection from '../PriceRangeSection/PriceRangeSection';

const FilterSection = ({ categories, priceRange }) => {
  return (
    <Grid item xs={12} sm={3}>
      <CategorySection categories={categories} />
      <PriceRangeSection priceRange={priceRange} />
    </Grid>
  );
};

export default FilterSection;
