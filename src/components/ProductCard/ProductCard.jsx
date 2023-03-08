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
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductCard = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image='/react-mui-ecom-boilerplate/img/sample-image.jpg'
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
            JBL EON 615
          </Typography>
          <Typography variant='h5' component={'span'} color='primary'>
            $ 1,000
          </Typography>
        </Box>
        <Typography variant='body2' color='text.secondary'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut minima
          enim molestiae architecto voluptatem
        </Typography>
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
            color='primary'
            size='medium'
            style={{ width: '100%' }}
            endIcon={<FontAwesomeIcon icon={faCartPlus} />}
          >
            Add to cart
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
