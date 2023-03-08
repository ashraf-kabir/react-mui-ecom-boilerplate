import React from 'react';
import {
  Grid,
  Box,
  InputAdornment,
  Button,
  TextField,
  Typography,
  // styled,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <Box
      className='hero__image'
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/hero-1.jpg)',
      }}
    >
      <Box className='hero__text'>
        {/* <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui</p> */}
        <Typography
          variant='h3'
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur
        </Typography>
        <Typography
          variant='h5'
          gutterBottom
          sx={{
            color: 'white',
          }}
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={8}
            style={{
              padding: 0,
            }}
          >
            <div className='custom__fieldset'>
              <TextField
                id='outlined-search'
                type='search'
                placeholder='Type to search'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <FontAwesomeIcon icon={faSearch} />
                    </InputAdornment>
                  ),
                }}
                variant='outlined'
                sx={{
                  width: '90%',
                  height: '3.5rem',
                  color: 'black',
                  background: 'rgba(255, 255, 255, 0.54)',
                  borderRadius: '0.5rem',
                }}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            style={{
              padding: 0,
            }}
          >
            <Button
              variant='contained'
              sx={{
                height: '3.5rem',
                width: '90%',
                borderRadius: '0.5rem',
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
