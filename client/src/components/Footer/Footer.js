import React from 'react';
import { Container, Typography } from '@mui/material';
import './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;