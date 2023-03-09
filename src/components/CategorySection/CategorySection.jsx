import React from 'react';
import { Grid, Box, Typography, Checkbox } from '@mui/material';

const CategorySection = ({ categories }) => {
  return (
    <Grid item xs={12} sm={3}>
      <Typography
        variant='h5'
        gutterBottom
        sx={{
          fontWeight: 'bold',
        }}
      >
        Categories
      </Typography>
      <Typography
        variant='body1'
        gutterBottom
        sx={{
          color: '#b3b3b3',
        }}
      >
        Select a category to filter products
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
          padding: '0.5rem',
          marginTop: '1rem',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontSize: '1rem',
          }}
        >
          <Checkbox
            defaultChecked
            color='primary'
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <Typography variant='body1' gutterBottom>
            All
          </Typography>
        </Box>
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              fontSize: '1rem',
            }}
          >
            <Checkbox
              defaultChecked
              color='primary'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography variant='body1' gutterBottom>
              {category.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default CategorySection;
