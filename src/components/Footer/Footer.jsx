import React from 'react';
import { Container, Grid, Box, Typography, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://ashraf-kabir.github.io/'>
        Ashraf Kabir
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 5,
        mt: 'auto',
        height: '8rem',
        bgcolor: '#c4c4c4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth='xl'>
        <Grid
          container
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <Copyright />
          </Grid>
          <Grid
            item
            // add padding top 1 rem when the screen is small
            sx={{ '@media (max-width: 600px)': { pt: 2 } }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '20rem',
              }}
            >
              <Link href='#' color='inherit'>
                <FontAwesomeIcon
                  icon={faFacebook}
                  size='2x'
                  style={{ color: '#3b5998' }}
                />
              </Link>
              <Link href='#' color='inherit'>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size='2x'
                  style={{ color: '#e1306c' }}
                />
              </Link>
              <Link href='#' color='inherit'>
                <FontAwesomeIcon
                  icon={faTwitter}
                  size='2x'
                  style={{ color: '#1da1f2' }}
                />
              </Link>
              <Link href='#' color='inherit'>
                <FontAwesomeIcon
                  icon={faYoutube}
                  size='2x'
                  style={{ color: '#ff0000' }}
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
