import React from 'react';
import { Container, Typography } from '@mui/material';
import './Account.module.css';

const Account = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center">
        My Account
      </Typography>
      <Typography variant="h6" component="p" align="center">
        Welcome to your account dashboard. Here you can manage your orders, addresses, and account details.
      </Typography>
    </Container>
  );
};

export default Account;