import React from 'react';
import { Container, Typography } from '@mui/material';
import './Cart.module.css';

const Cart = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center">
        Shopping Cart
      </Typography>
      <Typography variant="h6" component="p" align="center">
        Review your items and proceed to checkout.
      </Typography>
    </Container>
  );
};

export default Cart;