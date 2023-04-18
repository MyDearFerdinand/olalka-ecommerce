import React from 'react';
import { Container, Typography } from '@mui/material';
import './AboutUs.module.css';

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center">
        About Us
      </Typography>
      <Typography variant="h6" component="p" align="center">
        Learn more about our company and our mission to provide the best clothing and shopping experience.
      </Typography>
    </Container>
  );
};

export default AboutUs;