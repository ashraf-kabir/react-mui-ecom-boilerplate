import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PriceRangeSlider from '../PriceRangeSlider/PriceRangeSlider';

const PriceRangeSection = ({ priceRange }) => {
  return (
    <Grid item xs={12} mt={3}>
      <Typography
        variant='h5'
        gutterBottom
        sx={{
          fontWeight: 'bold',
        }}
      >
        Price Range
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
          padding: '1rem',
          // marginTop: '1rem',
          width: '100%',
        }}
      >
        <Typography variant='body1'>
          <strong>Range:</strong> $0 - $1000
        </Typography>
        <PriceRangeSlider
          minDistance={10}
          minVal={0}
          maxVal={1000}
          startVal={0}
          endVal={600}
        />
      </Box>
    </Grid>
  );
};

export default PriceRangeSection;
