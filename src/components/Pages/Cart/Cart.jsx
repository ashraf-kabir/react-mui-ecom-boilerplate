import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from '@mui/material';
import CartTable from '../../CartTable/CartTable';

const Cart = () => {
  return (
    <Container
      component='main'
      style={{ margin: 0, padding: '8rem 0 0 0' }}
      maxWidth={false}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={2} marginBottom={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                variant='h4'
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Shopping Cart
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={12} md={8}>
            <CartTable />
          </Grid>
          <Grid item sm={12} md={4}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                border: '1px solid #e0e0e0',
                width: '100%',
                flex: '1',
              }}
            >
              <CardContent>
                <Typography
                  variant='h6'
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Subtotal (2 items): $1,000.00
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom
                  sx={{
                    color: '#b3b3b3',
                  }}
                >
                  Shipping and taxes calculated at checkout
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  width: '100%',
                  padding: '1rem',
                }}
              >
                <Button
                  variant='contained'
                  sx={{
                    color: '#fff',
                    width: '100%',
                  }}
                  color='success'
                >
                  Proceed to Checkout
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Cart;
