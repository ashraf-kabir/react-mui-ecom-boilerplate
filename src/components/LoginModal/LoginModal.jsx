import React from 'react';
import { useState, useEffect } from 'react';
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Modal,
  TextField,
} from '@mui/material';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const LoginModal = () => {
  const { loginModal } = useGlobalContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('login modal triggered received at modal component');
    setOpen(loginModal);
  }, [loginModal]);

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      disableBackdropClick
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: '500px',
          margin: 'auto',
          marginTop: 'calc(50vh - 200px)',
          padding: '1rem',
        }}
      >
        <CardContent>
          <Grid container justifyContent='space-between' paddingBottom={3}>
            <Grid item>
              <Typography
                variant='h5'
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Login
              </Typography>
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faXmark} />
            </Grid>
          </Grid>

          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            size='small'
            fullWidth
            sx={{
              marginBottom: '1rem',
            }}
          />
          <TextField
            id='outlined-basic'
            label='Password'
            type='password'
            variant='outlined'
            size='small'
            fullWidth
          />
        </CardContent>
        <CardActions
          sx={{
            padding: '1rem',
          }}
        >
          <Button
            variant='contained'
            sx={{
              color: '#fff',
              width: '100%',
            }}
            color='secondary'
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default LoginModal;
