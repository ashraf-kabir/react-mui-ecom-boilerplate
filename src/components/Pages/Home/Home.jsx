import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import HeroSection from '../../HeroSection/HeroSection';
import ProductCard from '../../ProductCard/ProductCard';

const Home = () => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container
      component='main'
      style={{ margin: 0, padding: 0 }}
      maxWidth={false}
    >
      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <HeroSection />
      </Container>

      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <Grid
          container
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '3rem 4rem 1rem 4rem',
          }}
        >
          <Grid
            item
            md={10}
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              padding: 0,
            }}
          >
            <Typography
              variant='h5'
              mr={2}
              gutterBottom
              sx={{
                fontWeight: 'bold',
              }}
            >
              All
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              sx={{
                color: '#b3b3b3',
                fontWeight: 'bold',
              }}
            >
              Category
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: 0,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.25rem 0.5rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '0.5rem',
                marginRight: '1rem',
              }}
            >
              <FontAwesomeIcon icon={faShuffle} />
            </Box>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Category</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={category}
                  label='Category'
                  onChange={handleChange}
                  sx={{
                    '& .MuiSelect-select': {
                      padding: '0.5rem 1rem',
                      fontSize: '1rem',
                    },
                  }}
                >
                  <MenuItem value=''>
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={1}>Food</MenuItem>
                  <MenuItem value={2}>Books</MenuItem>
                  <MenuItem value={3}>Electronics</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <Grid
          container
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 3rem 3rem 3rem',
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
      </Container>
    </Container>
  );
};

export default Home;
