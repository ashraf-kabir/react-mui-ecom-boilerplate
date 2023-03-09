import * as React from 'react';
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductCard = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 160 }}
        image='/react-mui-ecom-boilerplate/img/nike-air-max-270.jpg'
        title='green iguana'
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant='h5' component='div'>
            Nike Air Max 270
          </Typography>
        </Box>

        <Box>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              <Typography variant='body2' color='text.secondary'>
                <FontAwesomeIcon icon={faCheck} />
                &nbsp; Maximum Air
              </Typography>
            </li>
            <li>
              <Typography variant='body2' color='text.secondary'>
                <FontAwesomeIcon icon={faCheck} />
                &nbsp; Big Air, Even Bigger Style
              </Typography>
            </li>
            <li>
              <Typography variant='body2' color='text.secondary'>
                <FontAwesomeIcon icon={faCheck} />
                &nbsp; Lightweight Cushioning
              </Typography>
            </li>
          </ul>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <Typography variant='body2' color='text.secondary'>
            437 sold
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            5 left
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0.5rem',
          }}
        >
          <Typography variant='h6' component={'span'} color='secondary'>
            $160.00
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Button
            variant='contained'
            color='secondary'
            size='medium'
            style={{ width: '100%' }}
            endIcon={<FontAwesomeIcon icon={faCartPlus} />}
          >
            Buy now
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
